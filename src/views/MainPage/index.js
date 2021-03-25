import React from 'react'
import * as style from './style';
import StickerRow from './StickerRow';
import MainForm from '../../components/MainForm';


const MainPage =() => {
    return (
        <style.MainContainer>
            <StickerRow/>
            <MainForm/>
        </style.MainContainer>
    )
}

export default MainPage;
