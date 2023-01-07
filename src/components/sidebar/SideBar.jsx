import React from "react";
import styled from "styled-components";
import { GITHUB, LINKEDIN, INSTAGRAM, FACEBOOK } from "../../constants";
import SocialIcon from "../socialIcon/SocialIcon";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const HeaderSocials = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	gap: 0.8rem;
	height: 97vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	margin-left: 20px;

	&:before {
		content: "";
		width: 1px;
		height: 4rem;
		background: #ffffff;
	}

	&:after {
		content: "";
		width: 1px;
		height: 4rem;
		background: #ffffff;
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

const HeaderSocialsLink = styled.a`
	padding-bottom: 20px;
`;

const SideBar = () => {
	return (
		<HeaderSocials>
			<SocialIcon url={GITHUB}>
				<HeaderSocialsLink>
					<BsGithub />
				</HeaderSocialsLink>
			</SocialIcon>
			<SocialIcon url={LINKEDIN}>
				<HeaderSocialsLink>
					<BsLinkedin />
				</HeaderSocialsLink>
			</SocialIcon>
			<SocialIcon url={INSTAGRAM}>
				<HeaderSocialsLink>
					<BsInstagram />
				</HeaderSocialsLink>
			</SocialIcon>
			<SocialIcon url={FACEBOOK}>
				<HeaderSocialsLink>
					<BsFacebook />
				</HeaderSocialsLink>
			</SocialIcon>
		</HeaderSocials>
	);
};

export default SideBar;
