import { AxiosResponse } from 'axios';
import { DefaultRootState } from 'react-redux';

export interface IsingUpUserRequest {
    emailUser: string,
    password: string
}

export interface IsingUpUserSuccess {
    isAuthenticated: boolean,
    message?: string,
    userInfos?: { email: string, password: string },
    activeModalRegister?: boolean
}

export interface IUserData extends AxiosResponse {
    data: [{ email: string, password: string }]
}

export interface IStateReturn extends DefaultRootState {
    user: IsingUpUserSuccess
}

export interface IModalCreateOpen {
    activeModalRegister: boolean
}