import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";

type Member = {
	genome: Array<String>;
	fitness: number;
};

const Canvas = () => {
	const members = useSelector<RootState, Array<Member>>(
		state => state.dynamicState.members
	);

	const maxFitness = useSelector<RootState, number>(
		state => state.dynamicState.maxFitness
	);

	return (
		<SCanvas>
			<h1>Canvas</h1>
			<ul>
				{members &&
					members.map(member => {
						return <li>{member.genome}</li>;
					})}
			</ul>
			<Progress max="100" value={maxFitness * 100} />
		</SCanvas>
	);
};

export default Canvas;

const Progress = styled.progress`
	border: none;
	border-radius: 0.5rem;
	overflow: hidden;
	width: 100%;

	&::-webkit-progress-bar {
		background-color: #b4b3b3;
	}

	&::-webkit-progress-value {
		background-color: #31f531;
	}
`;

const SCanvas = styled.div`
	border: 1px solid black;
	flex: 1 1 80%;
`;
