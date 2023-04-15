export const getRatingNumber = (ratings) => {
	const ratingList = ratings.map(({ rating }) => rating);
	if (!ratingList.length) {
		return 0;
	}
	return Math.round(ratingList.reduce((sum, current) => sum + current, 0) / ratingList.length);
};
