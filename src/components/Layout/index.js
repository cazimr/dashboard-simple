import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Sidebar from "../Sidebar";
import * as style from "./style";

const Layout = ({ children }) => {
	return (
		<style.MainContainer>
			<Menu />
			<style.FlexColumn>
				<Header />
				<style.ContentContainer>
					<Sidebar/>
					{children}
				</style.ContentContainer>
			</style.FlexColumn>
		</style.MainContainer>
	);
};

export default Layout;
