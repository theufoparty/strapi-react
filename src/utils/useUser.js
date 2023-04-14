import { useEffect, useState } from "react";
import { fetchUser } from "./fetchUser";

export const useUser = (authState) => {
	const [reFetchToggle, setReFetchToggle] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetchUser(authState).then((user) => {
			setUser(user);
		});
	}, [authState, reFetchToggle]);

	const reFetchUser = () => setReFetchToggle(!reFetchToggle);

	return { user, reFetchUser };
};
