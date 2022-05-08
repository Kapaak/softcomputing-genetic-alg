import type { NextPage } from "next";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import ControlButtons from "../components/ControlButtons";
import Settings from "../components/Settings";
import { generatePopulation } from "../genetic/population";
import { MaxWidth } from "../styles/UIComponents/MaxWidth";

const Home: NextPage = () => {
	// const pop = generatePopulation({ target: "barbora", membersCount: 200 });
	return (
		<Section>
			<MaxWidth>
				{/* <button onClick={() => pop.nextGeneration()}>
					create next generation
				</button> */}
				<Container>
					<MainLayout>
						<Canvas />
						<Settings />
					</MainLayout>
					<ControlButtons />
				</Container>
			</MaxWidth>
		</Section>
	);
};

export default Home;

const MainLayout = styled.div`
	display: flex;
	flex: 1 1 80%;
`;

const Container = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
`;

const Section = styled.div`
	height: 100vh;
	background-color: #eedfe1;
`;
