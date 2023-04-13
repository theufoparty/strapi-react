import "./SignInForm.css";
import { useState } from "react";
import Form from "../../../form/Form";
import Input from "../../../input/Input";
import { loginUser } from "../../../../utils/loginUser";

const SignInForm = (props) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({ username: "", password: "" });

	const onSubmit = async () => {
		const authState = await loginUser(formState);
		if (authState) {
			props.setAuthState(authState);
			props.onClose();
		} else {
			setErrorMessage("There was an error signing in");
		}
	};

	return (
		<Form
			onClose={props.onClose}
			onSubmit={onSubmit}
			buttonText="Sign in"
			errorMessage={errorMessage}
		>
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
		</Form>
	);
};

export default SignInForm;
