import React from "react";
import { IconContext } from "react-icons";

const SocialIcon = ({ url, children }) => {
	return (
		<div>
			<IconContext.Provider value={{ color: "#ccc", size: "2.1rem" }}>
				<a href={url} target="_blank" rel="noreferrer">
					{children}
				</a>
			</IconContext.Provider>
		</div>
	);
};

export default SocialIcon;
