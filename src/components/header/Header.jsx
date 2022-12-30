import React, { useState } from "react";
import "./header.css";
import { HOME, ABOUT, PORTFOLIO, SKILLS, CONTACT, GITHUB, LINKEDIN, INSTAGRAM, FACEBOOK } from "../../constants";
import SocialIcon from "../socialIcon/SocialIcon";
import { BsGithub, BsLinkedin, BsInstagram, BsFacebook } from "react-icons/bs";

const Header = () => {
	const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
	const [menu_class, setMenuClass] = useState("menu hidden");
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass("burger-bar clicked");
			setMenuClass("menu visible");
		} else {
			setBurgerClass("burger-bar unclicked");
			setMenuClass("menu hidden");
		}
		setIsMenuClicked(!isMenuClicked);
	};

	return (
		<div className="header-container">
			<nav className="nav-bar">
				<div className="burger-menu" onClick={updateMenu}>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
					<div className={burger_class}></div>
				</div>
				<div className="header-socials">
					<SocialIcon url={GITHUB}>
						<BsGithub />
					</SocialIcon>
					<SocialIcon url={LINKEDIN}>
						<BsLinkedin />
					</SocialIcon>
					<SocialIcon url={INSTAGRAM}>
						<BsInstagram />
					</SocialIcon>
					<SocialIcon url={FACEBOOK}>
						<BsFacebook />
					</SocialIcon>
				</div>

				<div className={menu_class}>
					<ul className="nav-menu">
						<li className="nav-content">
							<a href="#home">{HOME}</a>
						</li>
						<li className="nav-content">
							<a href="#about">{ABOUT}</a>
						</li>
						<li className="nav-content">
							<a href="#portfolio">{PORTFOLIO}</a>
						</li>
						<li className="nav-content">
							<a href="#skills">{SKILLS}</a>
						</li>
						<li className="nav-content">
							<a href="#contact">{CONTACT}</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
