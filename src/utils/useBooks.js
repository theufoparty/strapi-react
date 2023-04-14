import { useEffect, useState } from "react";
import { fetchBooks } from "./fetchBooks";

export const useBooks = () => {
	const [reFetchToggle, setReFetchToggle] = useState(false);
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchBooks().then((books) => {
			setBooks(books);
		});
	}, [reFetchToggle]);

	const reFetchBooks = () => setReFetchToggle(!reFetchToggle);

	return { books, reFetchBooks };
};
