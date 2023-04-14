import { useEffect, useState } from "react";
import { fetchData } from "./fetchData";

export const useTheme = () => {
	const [theme, setTheme] = useState("lightmode");

	useEffect(() => {
		fetchData("page-theme").then((data) => {
			if (data.data.attributes.theme !== theme) {
				setTheme(data.data.attributes.theme);
			}
		});
	}, []);

	return theme;
};
