export const createUser = async (input) => {
	const response = await fetch("http://localhost:1337/api/auth/local/register", {
		method: "POST",
		body: JSON.stringify(input),
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
