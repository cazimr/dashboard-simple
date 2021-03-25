import React from 'react'
import * as style from './style';

const Sticker = ({color,imageSource,title,subtitle,width,height}) => {
    return (
        <style.MainContainer color={color} width={width} height={height}>
            <style.IconContainer src={imageSource} alt="Ikona"/>
            <style.TextContainer>
                <style.Title>{title}</style.Title>
                <style.SubTitle>{subtitle}</style.SubTitle>
            </style.TextContainer>
        </style.MainContainer>
    )
}

export default Sticker
