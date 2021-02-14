import * as S from '../styles/Pages/styles';
import FormLoggin from '../components/Form';
import ModalAlert from '../components/ModalAlert';

export default function Loggin() {

  return (
    <>
      <S.ContainerMain flex={true} height={'100vh'}> 

        <S.ImageAsideWithBackground height={'100%'} width={'768px'} imageUrl={'/images/image__loggin.png'} />

        <S.containerSection> 

          <S.Title isPrimary={true}> Olá, seja <br/> bem-vindo! </S.Title>
          <S.Info isPrimary={false}> Para acessar a plataforma, <br /> faça seu login. </S.Info>

          <FormLoggin />

        </S.containerSection>
      </S.ContainerMain>

      <ModalAlert />

    </>
    
  )
}
