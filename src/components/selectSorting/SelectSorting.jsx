import "./SelectSorting.css";

export const SORT_OPTIONS = {
	RATING: "Rating",
	TITLE: "Title",
	AUTHOR: "Author",
};

const SelectSorting = (props) => {
	return (
		<select
			className="select-sorting"
			value={props.selected}
			onChange={(e) => props.setSelected(e.target.value)}
		>
			{Object.values(SORT_OPTIONS).map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default SelectSorting;
