import React from "react";
import { Header, SideBar, Main } from "./components/index";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
			<SideBar />
			<Main />
		</React.Fragment>
	);
};

export default App;
