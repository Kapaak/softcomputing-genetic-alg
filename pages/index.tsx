import type { NextPage } from "next";
import styled from "styled-components";
import GeneratedWords from "../components/GeneratedWords";
import ControlButtons from "../components/ControlButtons";
import Settings from "../components/Settings";
import { MaxWidth } from "../styles/UIComponents/MaxWidth";
import Creator from "../components/Creator";
import { Hr } from "../styles/UIComponents/Hr";

const Home: NextPage = () => {
	return (
		<Section>
			<MaxWidth>
				<Container>
					<MainLayout>
						<GeneratedWords />
						<SideMenu>
							<Settings />
							<Hr />
							<ControlButtons />
							<Creator />
						</SideMenu>
					</MainLayout>
				</Container>
			</MaxWidth>
		</Section>
	);
};

export default Home;

const SideMenu = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 0 0;
`;

const MainLayout = styled.div`
	display: flex;
	flex: 1 1 80%;
	height: 100%;
	gap: 2rem;
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
