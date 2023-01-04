import React from "react";
import { Header } from "./components/index";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Header />
		</React.Fragment>
	);
};

export default App;
