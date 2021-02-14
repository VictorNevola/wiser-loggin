import { IsingUpUserRequest, IsingUpUserSuccess, IModalCreateOpen } from '../../../types/User';

//Saga Root
export function singUpUserRequest(data: IsingUpUserRequest) {
    return {
        type: 'SING_UP_REQUEST',
        userSingUp: data
    }
}

export function createUserRequest(data: IsingUpUserRequest) {
    return {
        type: "CREATE_USER_REQUEST",
        userInfos: data
    }
}

//Redux Root
export function singUpUser(dataUser: IsingUpUserSuccess) {
    return {
        type: 'SING_UP_SUCCESS',
        user: dataUser
    }
}

export function openModalRegister(modal: IModalCreateOpen) {
    return {
        type: 'OPEN_MODAL_REGISTER',
        modalOpen: modal
    }
}