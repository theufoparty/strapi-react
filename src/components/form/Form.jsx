import CloseButton from "./closeButton/CloseButton";
import "./Form.css";

const Form = (props) => {
	return (
		<div className="form-container">
			<CloseButton onClick={props.onClose} />
			<form
				className="form"
				onSubmit={(e) => {
					e.preventDefault();
					props.onSubmit();
				}}
			>
				{props.children}
				<button className="submit-button">{props.buttonText}</button>
				<p className="error-message">{props.errorMessage}</p>
			</form>
		</div>
	);
};

export default Form;
