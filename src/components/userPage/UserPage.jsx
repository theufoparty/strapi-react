import { useState } from "react";
import "./UserPage.css";
import Header from "../header/Header";
import { getAuthData } from "../../utils/getAuthData";
import { useTheme } from "../../utils/useTheme";
import { useUser } from "../../utils/useUser";
import FavoriteList from "../favoriteList/FavoriteList";
import { useBooks } from "../../utils/useBooks";
import RatingList from "../ratingList/RatingList";
import { useNavigate } from "react-router";

function UserPage() {
	const [authState, setAuthState] = useState(getAuthData());
	const navigate = useNavigate();
	if (!authState.jwt) {
		navigate("/");
	}
	const { user, reFetchUser } = useUser(authState);
	const theme = useTheme();
	const { books, reFetchBooks } = useBooks();

	return (
		<div className={`${theme} app`}>
			<Header user={user} theme={theme} setAuthState={setAuthState} />
			<div className="user-content-container">
				<FavoriteList
					books={books}
					reFetchBooks={reFetchBooks}
					user={user}
					reFetchUser={reFetchUser}
					layout="row"
					theme={theme}
				/>
				<RatingList
					books={books}
					reFetchBooks={reFetchBooks}
					user={user}
					reFetchUser={reFetchUser}
					layout="row"
					theme={theme}
				/>
			</div>
		</div>
	);
}

export default UserPage;
