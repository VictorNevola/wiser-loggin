import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import * as S from './styles';

export default function FormLoggin() {
    const { register, handleSubmit, errors, clearErrors, watch } = useForm();
    const watchAllFields = watch();

    const [erroEmail, setErroEmail] = useState(false);
    const [erroPassword, setErroPassword] = useState(false);


    useEffect(()=> {

        if(errors.emailUser == undefined) setErroEmail(false);
        if(errors && errors?.emailUser) setErroEmail(true);

        if(errors.password == undefined) setErroPassword(false);
        if(errors && errors?.password) setErroPassword(true);

    }, [watchAllFields]);

    const clearErro = (inputRef: string) => {

        if(inputRef === 'emailUser') {
            setErroEmail(false);
        }
        
        if(inputRef == 'password') {
            setErroPassword(false);
        }

        clearErrors(inputRef);
    }

    const onSubmit = data => console.log(data);

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

            <S.inputSubmit type="submit" />

            <S.spanInfo> Esqueceu seu login ou senha? <br /> <S.link href="#"> Clique aqui </S.link> </S.spanInfo>

        </S.form    >
    )

}