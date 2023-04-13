export const getAuthData = () => {
	const cookie = document.cookie;
	const data = cookie.split("=")[1];
	let authData = {};
	try {
		authData = JSON.parse(data) || {};
	} catch (error) {
		authData = {};
	}
	return authData;
};
