import "./FavoriteList.css";
import blackKitten from "../../assets/black-kitten.png";
import whiteKitten from "../../assets/white-kitten.png";
import UserBookList from "../userBookList/UserBookList";

const FavoriteList = (props) => {
	const { user, reFetchUser, books, reFetchBooks } = props;

	const favoriteBooks = books.filter((book) =>
		user?.favorites.some((favorite) => favorite.id === book.id)
	);

	const catLogo = props.theme === "darkmode" ? whiteKitten : blackKitten;

	return (
		<UserBookList
			title="Your reading List"
			fallbackImage={catLogo}
			fallbackImageAltText="Kitten"
			layout="row"
			user={user}
			reFetchUser={reFetchUser}
			books={favoriteBooks}
			reFetchBooks={reFetchBooks}
		/>
	);
};
export default FavoriteList;
