import React from "react";
import * as style from "./style";

const Menu = () => {
	return (
		<style.MenuContainer>
			<style.IconContainer>
				<style.Icon />
			</style.IconContainer>
			<style.MenuList>
				<style.MenuItem>
					<style.ItemContent>M1</style.ItemContent>
				</style.MenuItem>
				<style.MenuItem>
					<style.ItemContent>M2</style.ItemContent>
                    <style.SubMenuList>
						<style.SubMenuItem>
							<style.ItemContent>Submenu1</style.ItemContent>
						</style.SubMenuItem>
						<style.SubMenuItem>
							<style.ItemContent>Submenu2</style.ItemContent>
							<style.SubSubMenuList>
								<style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu1</style.ItemContent>
								</style.SubSubMenuItem>
                                <style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu2</style.ItemContent>
								</style.SubSubMenuItem>
                                <style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu3</style.ItemContent>
								</style.SubSubMenuItem>
							</style.SubSubMenuList>
						</style.SubMenuItem>
						<style.SubMenuItem>
							<style.ItemContent>Submenu3</style.ItemContent>
						</style.SubMenuItem>
					</style.SubMenuList>
				</style.MenuItem>
				<style.MenuItem>
					<style.ItemContent>M3</style.ItemContent>
				</style.MenuItem>
				<style.MenuItem>
					<style.ItemContent>M4</style.ItemContent>
                    <style.SubMenuList>
						<style.SubMenuItem>
							<style.ItemContent>Submenu1</style.ItemContent>
						</style.SubMenuItem>
						<style.SubMenuItem>
							<style.ItemContent>Submenu2</style.ItemContent>
							<style.SubSubMenuList>
								<style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu1</style.ItemContent>
								</style.SubSubMenuItem>
                                <style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu2</style.ItemContent>
								</style.SubSubMenuItem>
                                <style.SubSubMenuItem>
									<style.ItemContent>SubSubMenu3</style.ItemContent>
								</style.SubSubMenuItem>
							</style.SubSubMenuList>
						</style.SubMenuItem>
						<style.SubMenuItem>
							<style.ItemContent>Submenu3</style.ItemContent>
						</style.SubMenuItem>
					</style.SubMenuList>
				</style.MenuItem>
				<style.MenuItem>
					<style.ItemContent>M5</style.ItemContent>
				</style.MenuItem>
				<style.MenuItem>
					<style.ItemContent>M6</style.ItemContent>
				</style.MenuItem>
			</style.MenuList>
		</style.MenuContainer>
	);
};

export default Menu;
