import React from "react";
import * as style from "./style";
import ziraLogo from "../../shared/zira-logo.png";
import { useSidebarContext } from "../../context/useSidebarContext";
import { useMenuContext } from "../../context/useMenuContext";

const Header = () => {
	const { showSidebar, setShowSidebar } = useSidebarContext();
	const { showMenu, setShowMenu } = useMenuContext();

	return (
		<style.HeaderContainer>
			<style.FlexRow>
				<style.IconContainer menuOpened ={showMenu} onClick={() => setShowMenu(!showMenu)}>
					<style.Icon />
				</style.IconContainer>
				<style.Logo unselectable="on" src={ziraLogo} />
			</style.FlexRow>

			<style.FlexRow>
				<style.Button>B1</style.Button>
				<style.Button>B2</style.Button>
				<style.Button onClick={() => setShowSidebar(!showSidebar)}>B3</style.Button>
			</style.FlexRow>
		</style.HeaderContainer>
	);
};

export default Header;
