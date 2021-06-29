import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../BackButton';
import { Car } from '../DetailCar/styles';

import {
 Container,
 Header,
 Title,
 Description,
 Details,
 DetailsTitle,
 DetailsQtd,
 ListCar
} from './styles';

export function MyCars(){
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton onPress={handleBack} />

        <Title>
          Seus agendamentos {'\n'}
          estão aqui.
        </Title>
        <Description>
          Conforto, segurança e praticidade.
        </Description>
      </Header>

      <Details>
        <DetailsTitle>Agendamentos feitos</DetailsTitle>
        <DetailsQtd>02</DetailsQtd>
      </Details>
      
      <ListCar>
        
      </ListCar>

      
    </Container>
  );
}