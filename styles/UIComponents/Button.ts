import styled from "styled-components";

export const Button = styled.button<{ specialType?: boolean }>`
	border: none;
	padding: 1rem 1.4rem;
	background-color: ${({ specialType }) =>
		specialType ? "#f7f1f1" : "#ff6262"};
	box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
		6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
		12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
		22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
		41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
		100px 100px 80px rgba(0, 0, 0, 0.07);
	border-radius: 0.6rem;
	font-weight: bold;
	font-size: 1.4rem;
	cursor: pointer;

	&:hover {
		background-color: ${({ specialType }) =>
			specialType ? "#e7e0e0" : "#fa7b7b"};
	}

	&:active {
		transform: scale(0.98);
	}

	&:disabled {
		background-color: #ececec;
		color: #a09e9e;
		cursor: auto;
		box-shadow: none;
		transform: scale(1);
	}
`;
