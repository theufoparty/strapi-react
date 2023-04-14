import "./Cover.css";

const getCoverImage = (images) => {
	if (images.medium) {
		return images.medium;
	}
	if (images.small) {
		return images.small;
	}
	return images.thumbnail;
};

const Cover = (props) => {
	const imageURL = getCoverImage(props.images);
	return <img className="cover" src={imageURL} />;
};

export default Cover;
