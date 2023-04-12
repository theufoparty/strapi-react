import "./Input.css";

const Input = (props) => {
	return (
		<label className="label">
			{props.label}
			<input
				className="input"
				value={props.value}
				onChange={(e) => props.setValue(e.target.value)}
				type={props.type}
			/>
		</label>
	);
};

export default Input;
