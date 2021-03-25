import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./index.css";
import Layout from "./components/Layout";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>Tekst</Layout>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
