import * as S from '../styles/Pages/loggin';
import { useSelector } from "react-redux";

import FormLoggin from '../components/Form';
import ModalAlert from '../components/ModalAlert';
import ModalRegister from '../components/ModalRegister';

import { IStateReturn } from "../types/User";

export default function Loggin() {

  const selectUSerState = (state: IStateReturn) => state.user
  const user = useSelector(selectUSerState);

  return (
    <>
      <S.ContainerMain flex={true} height={'100vh'}> 

        <S.ImageAsideWithBackground height={'100%'} width={'768px'} imageUrl={'/images/image__loggin.png'} />

        <S.containerSection> 

          <S.Title isPrimary={true}> Olá, seja <br/> bem-vindo! </S.Title>
          <S.Info isPrimary={false}> Para acessar a plataforma, faça seu login. </S.Info>

          <FormLoggin dispatchNameAction="SING_UP_REQUEST" infosButton={true} nameButtonSubmit={"Entrar"} />

        </S.containerSection>
      </S.ContainerMain>

      <ModalAlert />

      {
        user && <ModalRegister />
      }

    </>
    
  )
}
