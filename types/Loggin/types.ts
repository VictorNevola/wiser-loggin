import { DefaultRootState } from 'react-redux'
export interface IPropsStyleContainer {
    flex: boolean,
    height: string,
}

export interface IPropsStyleimage {
    imageUrl: string
    height: string,
    width: string
}

export interface IPropsStyleTitle {
    isPrimary: boolean
}

interface Iuser {
    isAuthenticated: boolean,
    message: string,
    userInfos: { email: string, password: string}
}