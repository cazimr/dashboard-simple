import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom: ${({theme})=>theme.dims.border};
    height: ${({theme})=>theme.dims.headerHeight};
    background: ${({theme})=>theme.colors.primary};
    width: 100%;
`

export const Logo = styled.img`
    margin-left: 1em;
    width: 5em;
    height: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`;

export const Button = styled.button`
    height: 100%;
    width: 4.2em;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    color: ${({theme})=>theme.colors.textPrimary};
    border-left: ${({theme})=>theme.dims.border};
    background: ${({theme})=>theme.colors.primary};
    font-family: ${({theme})=>theme.fonts.textPrimary};
    cursor: pointer;
    &:hover{
        background: ${({theme})=>theme.colors.primaryLight};
    }
    &:focus{
        outline:0;
    }
`;