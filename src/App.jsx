import { useState } from "react";
import "./App.css";
import BookList from "./components/bookList/BookList";
import Header from "./components/header/Header";
import { getAuthData } from "./utils/getAuthData";
import { useTheme } from "./utils/useTheme";
import { useUser } from "./utils/useUser";

function App() {
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

export default App;
