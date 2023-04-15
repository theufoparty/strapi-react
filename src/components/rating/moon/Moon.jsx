import moonImage from "../../../assets/moon.png";
import "./Moon.css";

const Moon = (props) => {
	return (
		<img
			className={props.filled ? "filled" : "gibbous"}
			src={moonImage}
			alt="Moon icon"
			onMouseEnter={props.onMouseEnter}
			onClick={props.onClick}
		/>
	);
};

export default Moon;
