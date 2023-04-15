import "./UserSection.css";
import Button from "../../button/Button";
import { useLocation } from "react-router-dom";

const UserSection = (props) => {
	const location = useLocation();
	const linkHref = location.pathname === "/user" ? "/" : "/user";
	const linkText = location.pathname === "/user" ? "Back" : "User Page";

	return (
		<div className="user-section">
			<a className="user-name">{props.user.username}</a>
			<div className="user-section-buttons">
				<Button
					onClick={() => {
						document.cookie = "auth={}";
						props.setAuthState({});
					}}
				>
					Sign Out
				</Button>{" "}
				<a href={linkHref} className="user-section-link">
					{linkText}{" "}
				</a>
			</div>
		</div>
	);
};

export default UserSection;
