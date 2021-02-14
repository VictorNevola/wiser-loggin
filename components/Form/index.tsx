import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import LoaderIcon  from '../Loader/index';
import { singUpUserRequest } from '../../store/modules/user/actions';

import * as S from './styles';

export default function FormLoggin() {
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
        }, 3000);
    }

    const onSubmit = data => {
        setLoader(true);
        removeLoader();
        dispatch(singUpUserRequest(data));
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
    
    useEffect(()=> {

        if(errors.emailUser == undefined) setErroEmail(false);
        if(errors && errors?.emailUser) setErroEmail(true);

        if(errors.password == undefined) setErroPassword(false);
        if(errors && errors?.password) setErroPassword(true);

    }, [watchAllFields]);


    return (
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
                    !loader && <S.inputSubmit type="submit" value="Entrar" /> 
                }
                {
                    loader && <LoaderIcon />
                }
            </S.divSubmit>

            <S.spanInfo> Esqueceu seu login ou senha? <br /> <S.link href="#"> Clique aqui </S.link> </S.spanInfo>

        </S.form    >
    )

}