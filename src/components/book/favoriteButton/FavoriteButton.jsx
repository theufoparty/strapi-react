import "./FavoriteButton.css";

const FavoriteButton = (props) => {
	const isFavorite = props.user.favorites.some((favorite) => favorite.id === props.book.id);

	const onClick = () => {
		const config = {
			method: "PUT",
			body: JSON.stringify({
				favorites: {
					[isFavorite ? "disconnect" : "connect"]: [props.book.id],
				},
			}),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${props.user.token}`,
			},
		};
		fetch(`http://localhost:1337/api/users/${props.user.id}`, config).then(() => {
			props.reFetchUser();
		});
	};

	return (
		<button className="favorite-button" onClick={onClick}>
			{isFavorite ? "Remove from List" : "Add to List"}
		</button>
	);
};

export default FavoriteButton;
