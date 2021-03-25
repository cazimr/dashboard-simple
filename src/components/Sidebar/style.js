import styled from "styled-components";

export const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
    align-items:center;
    justify-content: flex-start;
    padding-top: 3em;
	height: 100%;
	z-index: 1;
	position: fixed;
	margin-left: ${({ showSidebar,menuOpened }) => (showSidebar ? menuOpened ? "76%": "80%" : "100%")};
	width: 22%;
	background: #E4E2E2;
    transition: all 0.5s ease-in;
    border: ${({theme})=>theme.dims.border};
    border-top: 0;
    margin-top: -1em;
	
`;

export const Title = styled.h2`
	font-family: ${({ theme }) => theme.fonts.primary};
	font-weight: 500;
	margin-top: 5em;
	font-size: 28px;
`;

export const SubTitle = styled.p`
	font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
    margin-top: 10em;
	font-size: 13px;
 
`;
