import * as S from './style';
import FormLoggin from '../Form/index';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {openModalRegister} from '../../store/modules/user/actions';
import { IStateReturn } from "../../types/User/index";

export default function ModalRegister(){
    const selectModalState = (state: IStateReturn) => state.user;
    const dispatch = useDispatch();
    const userAction = useSelector(selectModalState);
    const [active, setActive] = useState(false);

    useEffect(()=> {

        if( userAction && 'activeModalRegister' in userAction) return setActive(userAction?.activeModalRegister);

    }, [userAction])

    const handlerClickClose = useCallback((_e)=> {
        _e.preventDefault();
        dispatch(openModalRegister({activeModalRegister: false}))
    }, [active]);

    return (
        <S.divModalBackground active={active}>
            <S.divModalContainer>
                <S.btnCloseModal onClick={(_e)=> handlerClickClose(_e)}/>
                <S.spanTitleModal> 
                    Cadastrar-se
                </S.spanTitleModal>
                <FormLoggin nameButtonSubmit={"Registrar"} infosButton={false}  dispatchNameAction={"CREATE_USER_REQUEST"}/>
            </S.divModalContainer>
        </S.divModalBackground>
    )
}