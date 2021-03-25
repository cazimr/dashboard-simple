import React from "react";
import * as style from "./style";
import {useSidebarContext} from '../../context/useSidebarContext';
import {useMenuContext} from '../../context/useMenuContext';

const Sidebar = () => {
    const {showSidebar} = useSidebarContext();
	const {showMenu} = useMenuContext();
	return (
		<style.SidebarContainer menuOpened = {showMenu} showSidebar={showSidebar}>
			<style.Title>Right sidebar</style.Title>
            <style.SubTitle>NEKI CONTENT</style.SubTitle>
		</style.SidebarContainer>
	);
};

export default Sidebar;
