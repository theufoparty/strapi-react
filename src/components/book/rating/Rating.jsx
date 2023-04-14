import { useState } from "react";
import Moon from "./moon/Moon";
import "./Rating.css";

const getRatingNumber = (ratings) => {
	const ratingList = ratings.map(({ rating }) => rating);
	if (!ratingList.length) {
		return 0;
	}
	return Math.round(ratingList.reduce((sum, current) => sum + current, 0) / ratingList.length);
};

const Rating = (props) => {
	const ratingNumber = getRatingNumber(props.ratings);
	const canRate = !!props.user;
	const [filled, setFilled] = useState(ratingNumber);
	const userRating = props.user?.ratings.find((rating) => rating.book.id === props.book.id);

	const addRating = (newRating) => {
		if (userRating) {
			const config = {
				method: "PUT",
				body: JSON.stringify({
					data: {
						rating: newRating,
					},
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${props.user.token}`,
				},
			};
			fetch(`http://localhost:1337/api/ratings/${userRating.id}`, config).then(() => {
				props.reFetchBooks();
				props.reFetchUser();
			});
		} else {
			const config = {
				method: "POST",
				body: JSON.stringify({
					data: {
						book: props.book.id,
						users_permissions_user: props.user.id,
						rating: newRating,
					},
				}),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${props.user.token}`,
				},
			};
			fetch(`http://localhost:1337/api/ratings`, config).then(() => {
				props.reFetchBooks();
				props.reFetchUser();
			});
		}
	};

	return (
		<>
			<div className="rating" onMouseLeave={() => setFilled(ratingNumber)}>
				{[1, 2, 3, 4, 5].map((moonNumber) => (
					<Moon
						key={moonNumber}
						filled={moonNumber <= filled}
						onMouseEnter={() => canRate && setFilled(moonNumber)}
						onClick={() => addRating(moonNumber)}
					/>
				))}
			</div>
			{!!userRating && <p className="book-text">Your Rating: {userRating.rating} </p>}
		</>
	);
};

export default Rating;
