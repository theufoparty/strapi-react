import Cover from "./cover/Cover";
import "./Book.css";
import Rating from "../rating/Rating";
import FavoriteButton from "./favoriteButton/FavoriteButton";
import Information from "./information/Information";

const Book = (props) => {
	const layoutClass = props.layout === "row" ? "book-row" : "book-column";

	return (
		<div className={`book ${layoutClass}`}>
			<Cover images={props.book.images} layout={props.layout} />
			<Information
				book={props.book}
				user={props.user}
				reFetchBooks={props.reFetchBooks}
				reFetchUser={props.reFetchUser}
				layout={props.layout}
				isFavoriteButtonEnabled={props.isFavoriteButtonEnabled}
			/>
		</div>
	);
};

export default Book;
