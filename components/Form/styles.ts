import style from 'styled-components';
import { IDivInput, iButtonErro } from './type';

export const form = style.form`
    width: 256px;
    margin-top: 26px;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 0px;
    }

`

export const divInputTitle = style.span`
    display: block;
    font-size: 10px;
    line-height: 24px;
    color: #383E71;
    padding-left: 8px;
    margin-top: 16px;
`
export const Divinput = style.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    border-color: ${(props: IDivInput) => props.error ? '#FF377F' : '#989FDB'};
    box-sizing: border-box;
    border-radius: 8px;
    padding: 17px 16px;
    max-height: 48px;
`

export const input = style.input`
    font-size: 12px;
    color: #383E71;
    border: none;
    background-color: transparent;
    width: 90%
`

export const buttonErro = style.button`
    display: ${(props: iButtonErro) => props.error ? 'block' : 'none'};
    border: none;
    background: transparent;

    &:after {
        content: '';
        display: block;
        background: no-repeat url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.4714 3.52859C12.7318 3.78894 12.7318 4.21105 12.4714 4.4714L4.47145 12.4714C4.2111 12.7317 3.78899 12.7317 3.52864 12.4714C3.26829 12.2111 3.26829 11.7889 3.52864 11.5286L11.5286 3.52859C11.789 3.26824 12.2111 3.26824 12.4714 3.52859Z' fill='%23FF377F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.52864 3.52859C3.78899 3.26824 4.2111 3.26824 4.47145 3.52859L12.4714 11.5286C12.7318 11.7889 12.7318 12.2111 12.4714 12.4714C12.2111 12.7317 11.789 12.7317 11.5286 12.4714L3.52864 4.4714C3.26829 4.21105 3.26829 3.78894 3.52864 3.52859Z' fill='%23FF377F'/%3E%3C/svg%3E%0A");
        height: 16px;
        width: 16px;

    }

`

export const spanErrorInfo = style.span`
    display: block;
    font-size: 10px;
    line-height: 24px;
    color: #FF377F;
    padding-left: 14px;
`

export const inputSubmit = style.input `
    width: 100%;
    border: none;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    margin-top:24px;
    margin-bottom: 32px;
    padding: 14px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    cursor: pointer
`

export const spanInfo = style.span`
    display: block;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #989FDB;
    text-align: center;
`

export const link = style.a`
    display: block;
    text-decoration: underline;    
    color: #9626AC;
`
