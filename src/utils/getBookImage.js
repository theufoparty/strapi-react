export const getBookImage = (images) => {
	if (images.medium) {
		return images.medium;
	}
	if (images.small) {
		return images.small;
	}
	return images.thumbnail;
};
