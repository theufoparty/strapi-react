import { SORT_OPTIONS } from "../components/selectSorting/SelectSorting";
import { getRatingNumber } from "./getRatingNumber";

export const getSortedBooks = (books, selectedSortOption) => {
	switch (selectedSortOption) {
		case SORT_OPTIONS.AUTHOR:
			return [...books].sort((a, b) => a.author.localeCompare(b.author));
		case SORT_OPTIONS.TITLE:
			return [...books].sort((a, b) => a.title.localeCompare(b.title));
		case SORT_OPTIONS.RATING:
			return [...books].sort((a, b) => getRatingNumber(b.ratings) - getRatingNumber(a.ratings));
	}
	return books;
};
