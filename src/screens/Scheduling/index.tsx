import React, { useState } from 'react';
import { Alert, StatusBar, View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Calendar, DayProps, generateInterval, MarkedDateProps, RentalPeriodDates } from '../../components/Calendar';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns/esm';
import { getPlatformDate } from '../../utils/getPlataformDate';

interface Car {
  id: string;
  brand: string;
  name: string;
  rent: {
    price: string;
    period: string;
  }
  thumbnail: string;
}

interface CarProps {
  car: Car;
}

export function Scheduling() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarProps; 

  const [lastSelectDate, setLastSelectDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodDates>({} as RentalPeriodDates);

  function handleSchedulingDetails() {
    navigation.navigate('SchedulingDatails', {
      car,
      dates: Object.keys(markedDates)
    });
  }

  function hadleBack() {
    navigation.goBack();
  }

  function handleChangeDates(date: DayProps) {
    let start = !lastSelectDate.timestamp ? date : lastSelectDate
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval); 

    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      startFormat: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormat: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
    })
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <BackButton color={theme.colors.shape} onPress={hadleBack} />

        <Title>
          Escolha uma {'\n'}
          data de inicio e {'\n'}
          fim do aluguel 
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormat}>{rentalPeriod.startFormat}</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormat}>{rentalPeriod.endFormat}</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDates}
        />
      </Content>

      <Footer>
        <Button 
          title="Confirmar" 
          color={theme.colors.main} 
          onPress={handleSchedulingDetails}
          enabled={!!rentalPeriod.startFormat}
        />
      </Footer>
    </Container>
  );
}