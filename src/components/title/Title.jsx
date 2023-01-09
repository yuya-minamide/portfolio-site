import React from "react";
import styled from "styled-components";

const TitleContainer = styled.h1`
	width: 70%;
	border-bottom: solid 3px var(--color-orange);
	margin-bottom: 40px;

	@media screen and (max-width: 960px) {
		width: 100%;
	}

	@media screen and (max-width: 520px) {
		font-size: 1.5rem;
		border-bottom: solid 2px var(--color-orange);
		margin-bottom: 20px;
	}
`;

const Title = (props) => {
	return <TitleContainer>{props.content}</TitleContainer>;
};

export default Title;
