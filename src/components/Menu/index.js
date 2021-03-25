import React, { useEffect, useState } from "react";
import * as style from "./style";
import createMenu from "./createMenu";
import menuData from "../../shared/menu.json";
import { useMenuContext } from "../../context/useMenuContext";

const Menu = () => {
	const {showMenu} = useMenuContext();
	const [menuList, setMenuList] = useState();
	useEffect(() => {
		setMenuList(createMenu(menuData));
	}, [setMenuList]);
	return <style.MenuContainer show={showMenu}>{!!menuList && <style.MenuList>{menuList}</style.MenuList>}</style.MenuContainer>;
};

export default Menu;
