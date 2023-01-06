import React from "react";
import styled from "styled-components";
import { Home } from "../index";

const MainContainer = styled.main`
	margin: 0 15%;

	@media screen and (max-width: 960px) {
		margin: 0 10%;
	}
`;

const Main = () => {
	return (
		<MainContainer>
			<Home />
		</MainContainer>
	);
};

export default Main;
