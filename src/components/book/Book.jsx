import Cover from "./cover/Cover";
import "./Book.css";
import Rating from "./rating/Rating";
import FavoriteButton from "./favoriteButton/FavoriteButton";

const Book = (props) => {
	const { id, author, title, published, pages, ratings, images } = props.book;

	return (
		<div className="book">
			<Cover images={images} />
			<p className="book-title">{title}</p>
			<p className="book-text">By {author}</p>
			<p className="book-text">Published: {published}</p>
			<p className="book-text">Pages: {pages}</p>

			<Rating
				ratings={ratings}
				user={props.user}
				reFetchBooks={props.reFetchBooks}
				book={props.book}
				reFetchUser={props.reFetchUser}
			/>
			{!!props.user && (
				<FavoriteButton user={props.user} book={props.book} reFetchUser={props.reFetchUser} />
			)}
		</div>
	);
};

export default Book;
