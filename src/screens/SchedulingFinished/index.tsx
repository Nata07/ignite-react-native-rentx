import React from 'react';

import {
  Container,
  Details,
  Title,
  Description,
} from './styles';

import LogoBackground from '../../assets/logo_background_gray.svg'
import DoneSvg from '../../assets/done.svg';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

export function SchedulingFinished(){
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBackToHome() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <LogoBackground />
      <Details>
        <DoneSvg />
        <Title>Carro alugado!</Title>
        <Description>
          Agora você só precisa ir {'\n'}
          até a concessionária da RENTX
          pegar o seu automóvel.
        </Description>
      </Details>
      <Button 
        color={theme.colors.shape_dark}
        title="Ok"
        onPress={handleBackToHome}
      />
    </Container>
  );
}