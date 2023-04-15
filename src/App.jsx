import { useState } from "react";
import "./App.css";
import BookList from "./components/bookList/BookList";
import Header from "./components/header/Header";
import { getAuthData } from "./utils/getAuthData";
import { useBooks } from "./utils/useBooks";
import { useTheme } from "./utils/useTheme";
import { useUser } from "./utils/useUser";

function App() {
	const [authState, setAuthState] = useState(getAuthData());
	const { user, reFetchUser } = useUser(authState);
	const theme = useTheme();
	const { books, reFetchBooks } = useBooks();

	return (
		<div className={`${theme} app`}>
			<Header user={user} theme={theme} setAuthState={setAuthState} />
			<div className="content-container">
				<BookList
					books={books}
					reFetchBooks={reFetchBooks}
					user={user}
					reFetchUser={reFetchUser}
					layout="column"
				/>
			</div>
		</div>
	);
}

export default App;
