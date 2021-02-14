import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import LoaderIcon  from '../Loader/index';
import { singUpUserRequest, openModalRegister, createUserRequest } from '../../store/modules/user/actions';

import * as S from './styles';
import { IpropsForm } from './types';

export default function FormLoggin({ dispatchNameAction, infosButton, nameButtonSubmit }: IpropsForm) {

    //States
    const [erroEmail, setErroEmail] = useState(false);
    const [erroPassword, setErroPassword] = useState(false);
    const [loader, setLoader] = useState(false);

    //Controls Form
    const { register, handleSubmit, errors, clearErrors, watch } = useForm();
    const watchAllFields = watch();

    //Actions
    const dispatch = useDispatch();
    const removeLoader = () => {
        setTimeout(()=> {
            setLoader(false)
        }, 5000);
    }

    const onSubmit = data => {
        if(dispatchNameAction === "SING_UP_REQUEST") {
            setLoader(true);
            removeLoader();
            return dispatch(singUpUserRequest(data));
        }

        if(dispatchNameAction === "CREATE_USER_REQUEST"){
            setLoader(true);
            removeLoader();
            return dispatch(createUserRequest(data))
        }
    };
    
    const clearErro = (inputRef: string) => {

        if(inputRef === 'emailUser') {
            setErroEmail(false);
        }
        
        if(inputRef == 'password') {
            setErroPassword(false);
        }

        clearErrors(inputRef);
    }

    const btnHandlerModalRegister = useCallback((e)=> {
        e.preventDefault();
        dispatch(openModalRegister({activeModalRegister: true}))
    }, [])
    
    useEffect(()=> {

        if(errors.emailUser == undefined) setErroEmail(false);
        if(errors && errors?.emailUser) setErroEmail(true);

        if(errors.password == undefined) setErroPassword(false);
        if(errors && errors?.password) setErroPassword(true);

    }, [watchAllFields]);


    return (
        <>
        <S.form onSubmit={handleSubmit(onSubmit)}>
            <S.divInputTitle>   
                E-MAIL
            </S.divInputTitle>

            <S.Divinput error={erroEmail}>
                <S.input name="emailUser" autoComplete="off" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
                <S.buttonErro error={erroEmail} type="button" onClick={()=> clearErro('emailUser')} />
            </S.Divinput>

            {errors.emailUser?.type == "required" && <S.spanErrorInfo>Email Obrigatorio</S.spanErrorInfo>}
            {errors.emailUser?.type == "pattern" && <S.spanErrorInfo>Digite um e-mail válido</S.spanErrorInfo>}
            
            <S.divInputTitle> 
                SENHA
            </S.divInputTitle>

            <S.Divinput error={erroPassword}>
                <S.input name="password" type='password' ref={register({ required: true })} />
                <S.buttonErro error={erroPassword} type="button" onClick={()=> clearErro('password')} />
            </S.Divinput>

            {errors.password?.type == "required" && <S.spanErrorInfo>Senha Obrigatorio</S.spanErrorInfo>}

            <S.divSubmit>
                {
                    !loader && <S.inputSubmit type="submit" value={nameButtonSubmit} /> 
                }
                {
                    loader && <LoaderIcon />
                }
            </S.divSubmit>

        </S.form>
            {
                infosButton && <S.spanInfo> Não possui cadastro ou <br/> Esqueceu seu login ou senha? <br /> <S.link type="button" onClick={(e) => btnHandlerModalRegister(e)}> Clique aqui </S.link> </S.spanInfo>
            }
        </>
    )

}