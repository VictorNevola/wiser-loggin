import { call, put, all, takeLatest }  from 'redux-saga/effects';
import bcrypt from "bcryptjs";

import api from '../../../services/api';
import { singUpUser, singUpUserRequest, createUserRequest } from './actions';

import { IUserData, IsingUpUserSuccess } from '../../../types/User';

function* singUp({ userSingUp }:  ReturnType<typeof singUpUserRequest>) {

    const response: IUserData = yield call(api.get, '/users');
    const userPayload: IsingUpUserSuccess = { isAuthenticated: false };

    if( response && response.data && userSingUp) {

        const userCapture = response.data.find(user => user.email === userSingUp.emailUser);

        if(userCapture) {
            const passwordAuth = yield bcrypt.compare(userSingUp.password, userCapture.password);
            
            if(passwordAuth) {
                userPayload.message = 'Usuário autenticado com Sucesso';
                userPayload.userInfos = userCapture;
                userPayload.isAuthenticated = true;

                return yield put(singUpUser(userPayload));
            }
       
        }

        userPayload.message = "E-mail ou senha incorretos, verificar!";
        return yield put(singUpUser(userPayload));

    }

    userPayload.message = "Erro Interno, tentar novamente mais tarde!";
    return yield put(singUpUser(userPayload));

}

function* createUser({userInfos}: ReturnType<typeof createUserRequest>){

    const salt = bcrypt.genSaltSync(10); 
    const passwordHash = yield bcrypt.hashSync(userInfos.password, salt);
    const userPayloadReturn: IsingUpUserSuccess = { isAuthenticated: false };
    const userPayloadSendData = {
        "email": userInfos.emailUser,
        "password": passwordHash
    }

    const createUser = yield call(api.post, `/users`, userPayloadSendData);

    if(createUser && createUser.data) {
        userPayloadReturn.activeModalRegister = false;
        userPayloadReturn.isAuthenticated = true;
        userPayloadReturn.message = "Usuário Cadastrado com Sucesso.";

        return yield put(singUpUser(userPayloadReturn)); 

    }

    userPayloadReturn.message = "Erro Interno, tentar novamente mais tarde!";
    return yield put(singUpUser(userPayloadReturn));
    
}

export default all([
    takeLatest('SING_UP_REQUEST', singUp),
    takeLatest('CREATE_USER_REQUEST', createUser),

])