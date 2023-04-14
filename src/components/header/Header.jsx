import deathLogoLightmode from "../../assets/deaths_nook_book_lightmode.png";
import deathLogoDarkmode from "../../assets/deaths_nook_book_darkmode.png";

import AuthenticationSection from "./authenticationSection/AuthenticationSection";
import "./Header.css";
import UserSection from "./userSection/UserSection";

const Header = (props) => {
	const deathLogo = props.theme === "darkmode" ? deathLogoDarkmode : deathLogoLightmode;

	return (
		<header className="header">
			<img className="death-logo" src={deathLogo} alt="Death reading a book."></img>
			<h1 className="title">Death's Book Nook</h1>
			{props.user ? (
				<UserSection user={props.user} setAuthState={props.setAuthState} />
			) : (
				<AuthenticationSection setAuthState={props.setAuthState} />
			)}
		</header>
	);
};

export default Header;
