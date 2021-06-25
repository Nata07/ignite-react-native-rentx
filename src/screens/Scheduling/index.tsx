import React from 'react';
import { StatusBar, View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Calendar } from '../../components/Calendar';
import theme from '../../styles/theme';
import { Button } from '../../components/Button';

import { 
  Container, 
  Header, 
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
 } from './styles';

import ArrowSvg from '../../assets/arrow.svg'
import { useNavigation } from '@react-navigation/native';

export function Scheduling() {
  const navigation = useNavigation();

  function handleSchedulingDetails(){
    navigation.navigate('SchedulingDatails')
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <BackButton color={theme.colors.shape}  />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel 
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={true}>18/06/2021</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" color={theme.colors.main} onPress={handleSchedulingDetails}/>
      </Footer>
    </Container>
  );
}