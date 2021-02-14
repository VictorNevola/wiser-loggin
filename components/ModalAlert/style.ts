import style from 'styled-components';
import { IPropsStyleModal } from './types';

export const div = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -70px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    max-width: 322px;
    height: 50px;
    padding: 12px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;

    transition: all .8s ease;
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    border-radius: 5px;
    background-color: ${(props: IPropsStyleModal) => props.error ? '#d75a4a' : '#1ab394'};
    transform: ${(props: IPropsStyleModal) => props.active && 'translateY(90px)'};
`;