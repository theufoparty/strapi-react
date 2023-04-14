import { useBooks } from "../../utils/useBooks";
import Book from "../book/Book";
import "./BookList.css";

const BookList = (props) => {
	const { books, reFetchBooks } = useBooks();

	return (
		<div className="book-list">
			{books.map((book) => (
				<Book
					key={book.id}
					book={book}
					user={props.user}
					reFetchBooks={reFetchBooks}
					reFetchUser={props.reFetchUser}
				/>
			))}
		</div>
	);
};

export default BookList;
