import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../store";
import { boundFetchCardsRequest } from "../../store/models/cards/cards.actions";
import { I_Card, I_CardState } from "../../store/models/cards/cards.types";

type FinallyProps = {};

const Finally: React.FC<FinallyProps> = (props) => {
	const { loading, error, cardsList } = useSelector<AppState, I_CardState>((state) => state.cardsState);
	const dispatch = useDispatch();

	console.log({ loading, error, cardsList });

	useEffect(() => {
		if (loading) alert("Pending");
		if (!loading && cardsList.length) alert("Success");
		if (error) alert(`Error: ${error}`);
	}, [cardsList, loading, error]);

	return (
		<div>
			<button onClick={() => dispatch(boundFetchCardsRequest())}>FetchData</button>
			{error && <div>Sorry WE failed to get you cards please forgive us for the mistake</div>}
			{cardsList.map((card: I_Card) => {
				return <h1>{card.title}</h1>;
			})}
		</div>
	);
};

export default Finally;
