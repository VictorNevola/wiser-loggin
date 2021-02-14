import { IsingUpUserRequest } from '../../types';

//Saga Root
export function singUpUserRequest(data: IsingUpUserRequest) {
    return {
        type: 'SING_UP_REQUEST',
        user: data
    }
}

//Redux Root
export function singUpUserSuccess(users) {
    return {
        type: 'SING_UP_SUCCESS',
        users: users
    }
}