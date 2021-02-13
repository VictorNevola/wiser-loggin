import style from 'styled-components';
import {IPropsStyleContainer, IPropsStyleimage, IPropsStyleTitle} from '../types/types';

export const ContainerMain = style.main `
    display: ${(props: IPropsStyleContainer )=> props.flex ? 'flex' : 'block'};
    height: ${(props: IPropsStyleContainer )=> props.height};

    @media (min-width: 320px) and (max-width: 480px) {
        display: block;
    }

`

export const ImageAsideWithBackground = style.aside `
    width: ${(props: IPropsStyleimage )=> props.width};
    height: ${(props: IPropsStyleimage )=> props.height};
    background: 
    linear-gradient(1deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url(${(props : IPropsStyleimage)=> props.imageUrl});
    background-size: cover;

    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
        // position: absolute;
        // height: 200rem;
        // background-position-x: center;
    }

`

export const containerSection = style.section `
    padding: 136px 232px 114px 112px;

    @media (min-width:767px) and (max-width:768px) {
        padding: 98px 32px 98px 32px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 42px 22px 0px 22px;
    }

    // @media (min-width: 320px) and (max-width: 480px) {
    //     position: absolute;
    //     top: 0;
    //     left: 30%;
    //     top: 30%;
    //     right: 0px;
    //     bottom: 0;
    //     background-color: #FAF5FF;
    //     padding: 0px;
    //     width: 54rem;
    //     height: 74rem;
    //     margin: 0 auto;
    // }

`

export const Title = style.h1 `
    color: ${(props:IPropsStyleTitle) => props.isPrimary ? '#383E71' : '#989FDB'};
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 16px;
`

export const Info = style.span `
    color: ${(props:IPropsStyleTitle) => props.isPrimary ? '#383E71' : '#989FDB'};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 43px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-bottom: 18px;
    }

`