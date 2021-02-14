import { call, put, all, takeLatest }  from 'redux-saga/effects';
import api from '../../../services/api';
import { singUpUserSuccess, singUpUserRequest } from './actions';

function* singUp({ user }:  ReturnType<typeof singUpUserRequest>) {

    const response = yield call(api.get, '/users');

    yield put(singUpUserSuccess(response.data))
}

export default all([
    takeLatest('SING_UP_REQUEST', singUp)
])