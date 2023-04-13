import "./AuthenticationSection.css";
import Button from "../../button/Button";
import SignInForm from "./signInForm/SignInForm";
import { useState } from "react";
import JoinForm from "./joinForm/JoinForm";

const AuthenticationSection = (props) => {
	const [showSignInForm, setShowSignInForm] = useState(false);
	const [showJoinForm, setShowJoinForm] = useState(false);

	return (
		<div className="auth-section">
			<Button onClick={() => setShowSignInForm(true)}>Sign In</Button>
			<Button onClick={() => setShowJoinForm(true)}>Join</Button>
			{showSignInForm && (
				<SignInForm onClose={() => setShowSignInForm(false)} setAuthState={props.setAuthState} />
			)}
			{showJoinForm && (
				<JoinForm onClose={() => setShowJoinForm(false)} setAuthState={props.setAuthState} />
			)}
		</div>
	);
};

export default AuthenticationSection;
