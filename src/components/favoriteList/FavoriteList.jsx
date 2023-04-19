import "./FavoriteList.css";
import UserBookList from "../userBookList/UserBookList";

const FavoriteList = (props) => {
	const { user, reFetchUser, books, reFetchBooks } = props;

	const favoriteBooks = books.filter((book) =>
		user?.favorites.some((favorite) => favorite.id === book.id)
	);

	return (
		<UserBookList
			title="Your reading List"
			fallbackText="No books added."
			layout="row"
			user={user}
			reFetchUser={reFetchUser}
			books={favoriteBooks}
			reFetchBooks={reFetchBooks}
		/>
	);
};
export default FavoriteList;
