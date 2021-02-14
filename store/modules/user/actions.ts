import { IsingUpUserRequest, IsingUpUserSuccess } from '../../../types/User';

//Saga Root
export function singUpUserRequest(data: IsingUpUserRequest) {
    return {
        type: 'SING_UP_REQUEST',
        userSingUp: data
    }
}

//Redux Root
export function singUpUser(dataUser: IsingUpUserSuccess) {
    return {
        type: 'SING_UP_SUCCESS',
        user: dataUser
    }
}