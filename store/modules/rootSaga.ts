import { all } from 'redux-saga/effects';

import singUp from './user/sagas';

export default function* rootSaga() {
    return yield all({
        singUp
    })
}