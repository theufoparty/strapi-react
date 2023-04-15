import Book from "../book/Book";
import "./BookList.css";

const BookList = (props) => {
	const layoutClass = props.layout === "row" ? "book-list-row" : "book-list-column";

	return (
		<div className={`book-list ${layoutClass}`}>
			{props.books.map((book) => (
				<Book
					key={book.id}
					book={book}
					user={props.user}
					reFetchBooks={props.reFetchBooks}
					reFetchUser={props.reFetchUser}
					layout={props.layout}
					isFavoriteButtonEnabled={props.isFavoriteButtonEnabled}
				/>
			))}
		</div>
	);
};

export default BookList;
