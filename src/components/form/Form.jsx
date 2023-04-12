import "./Form.css";

const Form = (props) => {
	return (
		<div className="form-container">
			<form onSubmit={(e) => e.preventDefault()}>{props.children}</form>
		</div>
	);
};

export default Form;
