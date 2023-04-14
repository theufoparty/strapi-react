import { useState } from "react";
import "./UserPage.css";
import BookList from "../bookList/BookList";
import Header from "../header/Header";
import { getAuthData } from "../../utils/getAuthData";
import { useTheme } from "../../utils/useTheme";
import { useUser } from "../../utils/useUser";

function UserPage() {
	const [authState, setAuthState] = useState(getAuthData());
	const { user, reFetchUser } = useUser(authState);
	const theme = useTheme();

	return (
		<div className={`${theme} app`}>
			<Header user={user} theme={theme} setAuthState={setAuthState} />
			<BookList user={user} reFetchUser={reFetchUser} />
		</div>
	);
}

export default UserPage;
