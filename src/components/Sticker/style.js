import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
    width:21.5em;
    height: 6em;
	width: ${({width})=> width ? width: "21.5em"};
	height: ${({height})=> {console.log("HEIGHT",height); return height ? height: "6em";}};
    background: ${({color,theme})=>color ? color: theme.colors.primary};
    border: ${({theme})=>theme.dims.border};
`;

export const IconContainer = styled.img`
	display: flex;
	width: 31%;
    height: 100%;
`;

export const TextContainer = styled.div`
	display: flex;
    flex-direction: column;
    padding: 1em 1em 1em 0.8em;
    width: 68%;
`;

export const Title = styled.h3`
    color: white;
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 15px;
`;

export const SubTitle = styled.p`
    color: white;
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 12px;
    margin-bottom: 1.5em;
`;



