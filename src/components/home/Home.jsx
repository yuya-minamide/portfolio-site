import React from "react";
import styled from "styled-components";
import { CommonButton } from "../index";
import {
	RESUME_LINK,
	RESUME,
	GREETING,
	MY_NAME,
	MY_POSITION,
	SHORT_INTRODUCTION1,
	SHORT_INTRODUCTION2,
	SHORT_INTRODUCTION3,
} from "../../constants/";

const TabletIndention = styled.br`
	display: none;
	@media (max-width: 960px) {
		display: block;
	}
`;

const HomeContainer = styled.div`
	margin-top: 20%;

	@media screen and (max-width: 960px) {
		margin-top: 30%;
	}

	@media screen and (max-width: 520px) {
		margin-top: 50%;
	}
`;

const Greeting = styled.h4`
	color: var(--color-orange);
`;

const MyName = styled.h1`
	line-height: 1.2;
	margin: 10px 0;
`;

const ShortIntroduction = styled.p`
	font-size: 1.2rem;
`;

const Home = () => {
	return (
		<HomeContainer>
			<Greeting>{GREETING}</Greeting>
			<MyName>
				{MY_NAME}
				<br />
				{MY_POSITION}
			</MyName>
			<ShortIntroduction>
				{SHORT_INTRODUCTION1} <TabletIndention />
				{SHORT_INTRODUCTION2} <br />
				{SHORT_INTRODUCTION3}
			</ShortIntroduction>
			<CommonButton url={RESUME_LINK} content={RESUME} />
		</HomeContainer>
	);
};

export default Home;
