import "./RatingList.css";
import UserBookList from "../userBookList/UserBookList";

const RatingList = (props) => {
	const { user, reFetchUser, books, reFetchBooks } = props;

	const ratedBooks = books.filter((book) =>
		user?.ratings.some((rating) => rating.book.id === book.id)
	);

	return (
		<UserBookList
			title="Your rated Books"
			fallbackText="No rated books."
			layout="row"
			user={user}
			reFetchUser={reFetchUser}
			books={ratedBooks}
			reFetchBooks={reFetchBooks}
			isFavoriteButtonEnabled={false}
		/>
	);
};
export default RatingList;
