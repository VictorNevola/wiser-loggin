import style from 'styled-components';
import { IPropsStyleModal } from './types';

export const divModalBackground = style.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.75);
    transition: all .4s ease;
    z-index: ${(props: IPropsStyleModal) => props.active ? '99999' : '0'};
    opacity: ${(props: IPropsStyleModal) => props.active ? '1' : '0'};
    pointer-events: ${(props: IPropsStyleModal) => props.active ? 'all' : 'none'}
`

export const divModalContainer = style.div`
    background-color: #FAF5FF;
    max-width: 40rem;
    margin: 0 auto;
    padding: 22px;
    border-radius: 4px;
`

export const btnCloseModal = style.button`
    display: block;
    border: none;
    content: "";
    background: no-repeat url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='12' viewBox='0 0 365.71733 365' width='12'%3E%3Cg fill='%23f44336'%3E%3Cpath d='m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0'/%3E%3Cpath d='m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0'/%3E%3C/g%3E%3C/svg%3E");
    height: 15px;
    width: 15px;
    margin-left: auto
`

export const spanTitleModal = style.span `
    display: block;
    color: #383E71;
    font-weight: normal;
    font-size: 26px;
    line-height: 28px;
    margin-bottom: 16px;
    text-align: center;
`