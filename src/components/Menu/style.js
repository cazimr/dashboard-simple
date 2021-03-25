import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";

export const MenuContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border: ${({theme})=>theme.dims.border};
	border-top: 0;
	background: ${({ theme }) => theme.colors.primary};
	width: ${({ theme }) => theme.dims.menuWidth};
	height: 100%;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	border-bottom: ${({theme})=>theme.dims.border};
	align-items: center;
	width: 100%;
	height: ${({ theme }) => theme.dims.headerHeight};
	background: ${({ theme }) => theme.colors.primaryLight};
`;

export const Icon = styled(MenuOutlined)`
	color: white;
	font-size: 2.2em;
`;

export const MenuList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	box-sizing: border-box;
	width: ${({ theme }) => theme.dims.menuWidth};
	color: ${({ theme }) => theme.colors.textPrimary};
	padding: 0;
	margin: 0;
	cursor: default;
`;

export const MenuItem = styled.li`
	display: flex;
	height: 4em;
	box-sizing: border-box;
	width: 100%;
	border-right: ${({theme})=>theme.dims.border};
	border-bottom: ${({theme})=>theme.dims.border};
	background: ${({ theme }) => theme.colors.primary};

	&:hover {
		background: ${({ theme }) => theme.colors.primaryLight};
	}
`;

export const SubMenuItem = styled(MenuItem)``;

export const SubSubMenuItem = styled(SubMenuItem)`
	border-right: 0;
`;

const AbstractMenuList = styled(MenuList)`
	display: none;
	margin-left: 3.8em;
	box-sizing: border-box;
	z-index: 1;
	position: fixed;
	width: 12em;
	border-top: ${({theme})=>theme.dims.border};
	margin-top: -1px;
`;

export const SubMenuList = styled(AbstractMenuList)`
	${MenuItem}:hover & {
		display: flex;
	}
`;

export const SubSubMenuList = styled(AbstractMenuList)`
	margin-left: 11.95em;
	border: ${({theme})=>theme.dims.border};
	border-bottom: 0;
	${SubMenuItem}:hover & {
		display: flex;
	}
`;

export const ItemContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	font-family: ${({ theme }) => theme.fonts.textPrimary};
	font-size: 15px;
`;

export const ExpandableItemCont = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-grow: 1;
	padding-right: 0.68em;
`;