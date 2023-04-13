import deathLogo from "../../assets/deaths_nook_book.png";
import AuthenticationSection from "./authenticationSection/AuthenticationSection";
import "./Header.css";

const Header = (props) => {
	return (
		<header className="header">
			<img className="death-logo" src={deathLogo} alt="Death reading a book."></img>
			<h1 className="title">Death's Book Nook</h1>
			<AuthenticationSection setAuthState={props.setAuthState} />
		</header>
	);
};

export default Header;
