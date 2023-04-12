import "./AuthenticationSection.css";
import Button from "../../button/Button";
import SignInForm from "./signInForm/SignInForm";
import { useState } from "react";

const AuthenticationSection = (props) => {
	const [showSignInForm, setShowSignInForm] = useState(false);

	return (
		<div className="auth-section">
			<Button onClick={() => setShowSignInForm(true)}>Sign In</Button>
			<Button>Join</Button>
			{showSignInForm && <SignInForm />}
		</div>
	);
};

export default AuthenticationSection;
