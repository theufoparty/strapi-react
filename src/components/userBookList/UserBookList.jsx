import { useState } from "react";
import { getSortedBooks } from "../../utils/getSortedBooks";
import BookList from "../bookList/BookList";
import SelectSorting, { SORT_OPTIONS } from "../selectSorting/SelectSorting";
import "./UserBookList.css";

const UserBookList = (props) => {
	const { user, reFetchUser, books, reFetchBooks } = props;
	const [selectedSortOption, setSelectedSortOption] = useState(SORT_OPTIONS.RATING);
	const sortedBooks = getSortedBooks(books, selectedSortOption);

	return (
		<div className="user-book-list">
			<div className="list-header">
				<h2 className="user-book-title">{props.title}</h2>
				<SelectSorting selected={selectedSortOption} setSelected={setSelectedSortOption} />
			</div>
			{books.length ? (
				<BookList
					layout="row"
					user={user}
					reFetchUser={reFetchUser}
					books={sortedBooks}
					reFetchBooks={reFetchBooks}
					isFavoriteButtonEnabled={props.isFavoriteButtonEnabled}
				/>
			) : (
				<p className="fallback">{props.fallbackText} </p>
			)}
		</div>
	);
};

export default UserBookList;
