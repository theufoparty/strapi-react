import "./JoinForm.css";
import { useEffect, useState } from "react";
import Form from "../../../form/Form";
import Input from "../../../input/Input";
import { createUser } from "../../../../utils/createUser";

const JoinForm = (props) => {
	const [errorMessage, setErrorMessage] = useState("");
	const [formState, setFormState] = useState({ username: "", password: "", email: "" });

	// Kommer alltid köras när komponenten renderas för första gången.
	// Därefter kommer den alltid att köras när något av värdena i listan ändras.
	useEffect(() => {
		if (errorMessage.length) {
			setErrorMessage("");
		}
	}, [formState]);

	const onSubmit = async () => {
		const authState = await createUser(formState);
		if (authState) {
			props.setAuthState(authState);
			props.onClose();
		} else {
			setErrorMessage("There was an error in creating the user");
		}
	};

	return (
		<Form onClose={props.onClose} onSubmit={onSubmit} errorMessage={errorMessage} buttonText="Join">
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
			<Input
				label="Email:"
				value={formState.email}
				setValue={(newEmail) => setFormState({ ...formState, email: newEmail })}
				type="email"
			/>
		</Form>
	);
};

export default JoinForm;
