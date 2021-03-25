import styled from "styled-components";
import {MenuOutlined} from '@ant-design/icons';


export const MenuContainer = styled.div`
	display: flex;
	box-sizing: border-box;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid black;
    border-top: 0;
    background: ${({theme})=>theme.colors.primary};
	width: 4.5em;
	height: 100%;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    align-items: center;
    width: 100%;
    height: 4em;
    background: ${({theme})=>theme.colors.primaryLight};
`;

export const Icon = styled(MenuOutlined)`
    color: white;
    font-size: 2.3em;



`