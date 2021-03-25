import React from "react";
import * as style from "./style";
import {useSidebarContext} from '../../context/useSidebarContext';

const Sidebar = () => {
    const {showSidebar} = useSidebarContext();
	return (
		<style.SidebarContainer showSidebar={showSidebar}>
			<style.Title>Right sidebar</style.Title>
            <style.SubTitle>NEKI CONTENT</style.SubTitle>
		</style.SidebarContainer>
	);
};

export default Sidebar;
