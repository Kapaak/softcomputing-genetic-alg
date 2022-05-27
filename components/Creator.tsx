import React from "react";
import styled from "styled-components";

const Creator = () => {
	return (
		<SCreator>
			<a href="https://pavelzapletal.cz/">created by Pavel Zapletal</a>
		</SCreator>
	);
};

const SCreator = styled.div`
	margin-top: auto;

	a {
		text-decoration: none;
		color: inherit;
	}
`;

export default Creator;
