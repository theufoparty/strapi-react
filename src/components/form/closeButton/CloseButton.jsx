import "./CloseButton.css";

const CloseButton = (props) => {
	return (
		<button className="close-button" onClick={props.onClick}>
			<svg viewBox="0 0 24 24" width="30" height="30">
				<path
					className="cross"
					d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
				></path>
			</svg>
		</button>
	);
};

export default CloseButton;
