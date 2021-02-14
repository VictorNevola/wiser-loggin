import style, { keyframes } from 'styled-components';

const ldsRollerKeyFrame = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const loader = style.div `
    display: block;
    width: 20px;
    height: 20px;
    margin: 0 auto;

    &:after {
        content: " ";
        display: block;
        width: 14px;
        height: 14px;
        margin: 0 auto;
        border-radius: 50%;
        border: 4px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${ldsRollerKeyFrame} 1.2s linear infinite;
    }
`