import { getBookImage } from "../../../utils/getBookImage";
import "./Cover.css";

const Cover = (props) => {
	const coverClass = props.layout === "row" ? "cover-row" : "cover-column";

	const imageURL = getBookImage(props.images);
	return <img className={`cover ${coverClass}`} src={imageURL} />;
};

export default Cover;
