import React from 'react'
import * as style from './style';
import ziraLogo from '../../shared/zira-logo.png';
import {useSidebarContext} from '../../context/useSidebarContext';

const Header = ()=>{
    const {showSidebar,setShowSidebar} = useSidebarContext();
    return (
        <style.HeaderContainer>
            <style.Logo src={ziraLogo}/>
            <style.ButtonContainer>
                <style.Button>B1</style.Button>
                <style.Button>B2</style.Button>
                <style.Button onClick={()=>setShowSidebar(!showSidebar)}>B3</style.Button>
            </style.ButtonContainer>
        </style.HeaderContainer>
            
     
    )
}

export default Header;
