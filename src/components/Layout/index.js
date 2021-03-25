import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Sidebar from "../Sidebar";
import * as style from "./style";


const Layout = ({ children }) => {
	return (
		<style.MainContainer>
			<Header />
			<style.FlexRow>
				<Menu/>
 				<style.ContentContainer>
					<Sidebar />
					{children}
				</style.ContentContainer> 
			</style.FlexRow>
		</style.MainContainer>
	);
};

export default Layout;
