import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    height: 4em;
    background: ${({theme})=>theme.colors.primary};
    width: 100%;
`

export const Logo = styled.img`
    margin-left: 1.3em;
    width: 5em;
    height: 100%;
`