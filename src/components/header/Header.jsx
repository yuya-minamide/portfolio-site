import React, { useState } from "react";
import styled from "styled-components";
import { HOME, ABOUT, PORTFOLIO, SKILLS, CONTACT, GITHUB, LINKEDIN, INSTAGRAM, FACEBOOK } from "../../constants";
import SocialIcon from "../socialIcon/SocialIcon";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const HeaderContainer = styled.header`
	width: 100%;
`;

const NavBar = styled.nav`
	position: fixed;
	z-index: 10;
	top: 0;
	background-color: #d9d9d913;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: flex-end;
	box-shadow: 0px 10px 10px -5px rgba(255, 255, 255, 0.3);

	@media screen and (max-width: 960px) {
		justify-content: space-between;
	}
`;

const Menu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 960px) {
		display: ${({ isMenuClicked }) => (isMenuClicked ? "inherit" : "none")};
		width: 100%;
		height: 100vh;
		background-color: #1b1310;
		opacity: 0.7;
		position: absolute;
		top: 0;
		z-index: -1;
		justify-content: center;
	}
`;

const NavMenu = styled.ul`
	display: flex;

	@media screen and (max-width: 960px) {
		display: block;
		text-align: center;
	}
`;

const NavContent = styled.li`
	padding: 5px 20px 10px 0;
`;

const NavContentLink = styled.a`
	font-size: 1.5rem;
`;

const HeaderSocials = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: flex;
		align-items: center;
	}
`;

const HeaderSocialsLink = styled.a`
	@media screen and (max-width: 960px) {
		padding-right: 20px;
	}
`;

const BurgerMenu = styled.div`
	@media screen and (max-width: 960px) {
		height: 100%;
		width: 3rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		cursor: pointer;
		padding: 1rem;

		div {
			width: 3.5rem;
			height: 0.5rem;
			background-color: #fff;
			opacity: 0.6;
			border-radius: 0.3rem;

			&:nth-child(1) {
				transform: ${({ isMenuClicked }) =>
					isMenuClicked ? "rotate(45deg) translate(0.75em, 1.25em)" : "rotate(0) translate(0)"};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
			&:nth-child(2) {
				transform: ${({ isMenuClicked }) => (isMenuClicked ? "scale(0.1)" : "rotate(0) translate(0)")};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
			&:nth-child(3) {
				transform: ${({ isMenuClicked }) =>
					isMenuClicked ? "rotate(135deg) translate(-0.5em, 1em)" : "rotate(0) translate(0)"};
				transition: ${({ isMenuClicked }) =>
					isMenuClicked ? "ease-out 0.5s" : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;"};
			}
		}
	}
`;

const Header = () => {
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	return (
		<HeaderContainer>
			<NavBar>
				<BurgerMenu isMenuClicked={isMenuClicked} onClick={() => setIsMenuClicked(!isMenuClicked)}>
					<div />
					<div />
					<div />
				</BurgerMenu>

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

				<Menu isMenuClicked={isMenuClicked}>
					<NavMenu>
						<NavContent>
							<NavContentLink href="#">{HOME}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="#">{ABOUT}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="#">{PORTFOLIO}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="#">{SKILLS}</NavContentLink>
						</NavContent>
						<NavContent>
							<NavContentLink href="#">{CONTACT}</NavContentLink>
						</NavContent>
					</NavMenu>
				</Menu>
			</NavBar>
		</HeaderContainer>
	);
};

export default Header;
