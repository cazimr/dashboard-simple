import React, { useEffect, useState } from "react";
import * as style from "./style";
import createMenu from "./createMenu";
import menuData from "../../shared/menu.json";

const Menu = () => {
	console.log("MENU DATA",menuData);
	const [menuList, setMenuList] = useState();
	useEffect(() => {
		setMenuList(createMenu(menuData));
	}, [setMenuList]);
	return (
		<style.MenuContainer>
			<style.IconContainer>
				<style.Icon />
			</style.IconContainer>
			{!!menuList && <style.MenuList>{menuList}</style.MenuList>}
		</style.MenuContainer>
	);
};

export default Menu;
