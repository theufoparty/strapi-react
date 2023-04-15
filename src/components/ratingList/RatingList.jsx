import "./RatingList.css";
import blackKitten from "../../assets/black-kitten.png";
import whiteKitten from "../../assets/white-kitten.png";
import UserBookList from "../userBookList/UserBookList";

const RatingList = (props) => {
	const { user, reFetchUser, books, reFetchBooks } = props;

	const ratedBooks = books.filter((book) =>
		user?.ratings.some((rating) => rating.book.id === book.id)
	);

	const catLogo = props.theme === "darkmode" ? whiteKitten : blackKitten;

	return (
		<UserBookList
			title="Your rated Books"
			fallbackImage={catLogo}
			fallbackImageAltText="Kitten"
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
