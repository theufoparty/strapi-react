export const loginUser = async ({ username, password }) => {
	const response = await fetch("http://localhost:1337/api/auth/local", {
		method: "POST",
		body: JSON.stringify({ identifier: username, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		const data = await response.json();
		const userString = JSON.stringify(data);
		document.cookie = `auth=${userString}`;
		return data;
	}

	return false;
};
