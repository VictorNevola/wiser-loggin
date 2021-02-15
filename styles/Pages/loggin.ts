import style from 'styled-components';
import {IPropsStyleContainer, IPropsStyleimage, IPropsStyleTitle} from '../../types/Loggin/types';

export const ContainerMain = style.main `
    display: ${(props: IPropsStyleContainer )=> props.flex ? 'flex' : 'block'};
    height: ${(props: IPropsStyleContainer )=> props.height};

    @media (min-width: 320px) and (max-width: 480px) {
        background: #130525;
        background: linear-gradient(180deg, #130525 0%, rgba(19,5,37,1) 100%);
    }

`

export const containerSection = style.section `
    padding: 136px 232px 114px 112px;
    transition: all .4s ease;

    @media (min-width:767px) and (max-width:768px) {
        padding: 98px 80px 98px 80px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        top: 138px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        padding: 24px 28px;
        width: 311px;
        height: 388px;
        margin: 0 auto;
        background: #FAF5FF;
        border-radius: 8px;
    }

`

export const ImageAsideWithBackground = style.aside `
    width: ${(props: IPropsStyleimage )=> props.width};
    height: ${(props: IPropsStyleimage )=> props.height};
    background: 
    linear-gradient(1deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url(${(props : IPropsStyleimage)=> props.imageUrl});
    background-size: cover;
    background-position: bottom;

    @media (min-width:767px) and (max-width:768px) {
        width: 327px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        background-repeat: no-repeat;
        background-position-y: -18px;
        height: 429px;
    }

`

export const Title = style.h1 `
    color: ${(props:IPropsStyleTitle) => props.isPrimary ? '#383E71' : '#989FDB'};
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 24px;
        line-height: 32px;
        text-align: center;
    }
`

export const Info = style.span `
    color: ${(props:IPropsStyleTitle) => props.isPrimary ? '#383E71' : '#989FDB'};
    display: block;
    width: 222px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 43px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: 18px;
        font-size: 12px;
        width: 100%;
    }

`