import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import "./index.css";
import Layout from "./components/Layout";
import { Provider as SidebarProvider } from "./context/useSidebarContext";
import { Provider as MenuProvider } from "./context/useMenuContext";
import MainPage from "./views/MainPage";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<MenuProvider>
				<SidebarProvider>
					<Layout>
						<MainPage />
					</Layout>
				</SidebarProvider>
			</MenuProvider>
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
