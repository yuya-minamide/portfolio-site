import React from "react";
import styled from "styled-components";
import { Title } from "../index";
import { ABOUT_TITLE, INTRODUCTION } from "../../constants/index";

const AboutSection = styled.section`
	margin-top: 30%;
	display: flex;

	@media screen and (max-width: 960px) {
		flex-direction: column;
		align-items: center;
	}
`;

const AboutContainer = styled.div`
	width: 50%;

	@media screen and (max-width: 960px) {
		order: 2;
		text-align: center;
		width: 70%;
	}

	@media screen and (max-width: 520px) {
		width: 90%;
	}
`;

const Introduction = styled.p`
	width: 80%;

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

const MyPicture = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	background-image: url("assets/person.jpg");
	border: solid 1px var(--color-orange);
	margin-left: 80px;
	box-shadow: 0 0 14px var(--color-orange);

	@media screen and (max-width: 960px) {
		order: 1;
		margin: 0 0 30px 0;
	}

	@media screen and (max-width: 520px) {
		width: 200px;
		height: 200px;
	}
`;

const About = () => {
	return (
		<AboutSection id="about">
			<AboutContainer>
				<Title content={ABOUT_TITLE} />
				<Introduction>{INTRODUCTION}</Introduction>
			</AboutContainer>
			<MyPicture />
		</AboutSection>
	);
};

export default About;
