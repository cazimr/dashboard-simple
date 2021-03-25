import * as style from "./style";

const createMenu = (menuData, depth = 0) => {
	let menu = [];
	menuData.forEach((el) => {
		let itemContent =
			el.submenus && depth > 0 ? 
                (<style.ItemContent>
					<style.ExpandableItemCont style={{ flexGrow: "2" }}>{el.title}</style.ExpandableItemCont>
					<style.ExpandableItemCont>{">"}</style.ExpandableItemCont>
				</style.ItemContent>) : 
                (<style.ItemContent>{el.title}</style.ItemContent>);

		let subMenus = el.submenus ? 
            (depth === 0 ? 
                (<style.SubMenuList>{createMenu(el.submenus, depth + 1)}</style.SubMenuList>) : 
                (<style.SubSubMenuList>{createMenu(el.submenus, depth + 1)}</style.SubSubMenuList>)
		    ) : ('');

		if (depth === 0) menu.push(<style.MenuItem key={el.key}>{itemContent}{subMenus}</style.MenuItem>);
		else if (depth === 1) menu.push(<style.SubMenuItem key={el.key}>{itemContent} {subMenus}</style.SubMenuItem>);
		else menu.push(<style.SubSubMenuItem key={el.key}> {itemContent} {subMenus} </style.SubSubMenuItem>	);
	});
	return menu;
};
export default createMenu;
