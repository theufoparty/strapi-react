import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { getAuthData } from "./utils/getAuthData";

function App() {
	const [authState, setAuthState] = useState(getAuthData());

	return (
		<div>
			<Header setAuthState={setAuthState} />
		</div>
	);
}

export default App;
