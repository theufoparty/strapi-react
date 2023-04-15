import Rating from "../../rating/Rating";
import FavoriteButton from "../favoriteButton/FavoriteButton";
import "./Information.css";

const Information = (props) => {
	const { author, title, published, pages, ratings } = props.book;
	// const layoutClass = props.layout === "row" ? "book-row" : "book-column";

	return (
		<div className="book-information">
			<p className="book-title">{title}</p> <p className="book-text">By {author}</p>
			<p className="book-text">Published: {published}</p>
			<p className="book-text">Pages: {pages}</p>
			<Rating
				ratings={ratings}
				user={props.user}
				reFetchBooks={props.reFetchBooks}
				book={props.book}
				reFetchUser={props.reFetchUser}
			/>
			{!!props.user && (props.isFavoriteButtonEnabled ?? true) && (
				<FavoriteButton user={props.user} book={props.book} reFetchUser={props.reFetchUser} />
			)}
		</div>
	);
};

export default Information;
