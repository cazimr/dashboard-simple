import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./index.css";
import Layout from "./components/Layout";
import { Provider as SidebarProvider } from "./context/useSidebarContext";
import MainPage from "./views/MainPage";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SidebarProvider>
				<Layout>
					<MainPage />
				</Layout>
			</SidebarProvider>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
