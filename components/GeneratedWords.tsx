import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";

type Member = {
	genome: Array<String>;
	fitness: number;
};

const GeneratedWords = () => {
	const members = useSelector<RootState, Array<Member>>(
		state => state.dynamicState.members
	);

	const maxFitness = useSelector<RootState, number>(
		state => state.dynamicState.maxFitness
	);

	const active = useSelector<RootState, boolean>(
		state => state.dynamicState.active
	);

	return (
		<SGeneratedWords>
			<h1>Generated words</h1>
			<br />
			<Container>
				<ul>
					{members &&
						members.map((member, index) => {
							return <li key={index}>{member.genome}</li>;
						})}
				</ul>
				{active && <Progress max="100" value={maxFitness * 100} />}
			</Container>
		</SGeneratedWords>
	);
};

export default GeneratedWords;

const Container = styled.div`
	display: flex;
	height: 100%;
`;

const Progress = styled.progress`
	border: none;
	border-radius: 0.5rem;
	overflow: hidden;
	width: 100%;
	flex: 1 1 20%;

	transform: rotate(270deg);
	transform-origin: 100%;

	&::-webkit-progress-bar {
		background-color: #fdb6b6;
	}

	&::-webkit-progress-value {
		background-color: #5aee66;
	}
`;

const SGeneratedWords = styled.div`
	padding: 4rem;
	border: 1px solid black;
	flex: 1 1 80%;
	max-height: 100%;

	ul {
		flex: 1 1 80%;
		overflow-y: auto;
		margin: 0 2rem;
		max-height: 90%;
	}

	li {
		list-style-type: none;
		font-size: 2rem;
		line-height: 1.8;
	}
`;
