import "./UserSection.css";
import Button from "../../button/Button";

const UserSection = (props) => {
	return (
		<div className="user-section">
			<a className="user-name">{props.user.username}</a>
			<Button
				onClick={() => {
					document.cookie = "auth={}";
					props.setAuthState({});
				}}
			>
				Sign Out
			</Button>
		</div>
	);
};

export default UserSection;
