import "./SignInForm.css";
import { useState } from "react";
import Form from "../../../form/Form";
import Input from "../../../input/Input";

const SignInForm = (props) => {
	const [formState, setFormState] = useState({ username: "", password: "" });
	return (
		<Form>
			<Input
				label="Username:"
				value={formState.username}
				setValue={(newUsername) => setFormState({ ...formState, username: newUsername })}
				type="text"
			/>
			<Input
				label="Password:"
				value={formState.password}
				setValue={(newPassword) => setFormState({ ...formState, password: newPassword })}
				type="password"
			/>
			<button className="sign-button">Sign in</button>
		</Form>
	);
};

export default SignInForm;
