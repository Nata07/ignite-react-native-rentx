import React from 'react';
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';
import { SpecificationItem } from '../SpecificationItem';
import { Button } from '../Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import PeopleSvg from '../../assets/people.svg';
import ExchangeSvg from '../../assets/exchange.svg';

import { 
  Container,
  Header,
  CarImages,
  Details,
  DetailHeader,
  Car,
  Brand,
  Name,
  Info,
  Period,
  Price,
  Specifications,
  RentalPeriod,
  CalendarIcon,
  DateTitle,
  DateValue,
  RentalPrice,
  PriceDetails,
  PriceDescription,
  PriceValue,
  PriceTotal,
  Footer
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MarkedDateProps, RentalPeriodDates } from '../Calendar';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPlatformDate } from '../../utils/getPlataformDate';
import { format } from 'date-fns';
import api from '../../services/api';
import { Alert } from 'react-native';

interface Car {
  id: string;
  brand: string;
  name: string;
  rent: {
    price: number;
    period: string;
  }
  thumbnail: string;
}

interface CarProps {
  car: Car;
  dates: string[];
}

export function SchedulingDatails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodDates>({} as RentalPeriodDates)
  
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as CarProps;

  console.log('dates');
  console.log(car.id);

  const rentalTotal = Number(dates.length * car.rent.price);
  
  async function handleConfirmRental() {
    const schedulingByCars = await  api.get(`/schedules/${car.id}`);

    console.log('schedulingByCars');
    console.log(schedulingByCars);

    const unavailable_dates = [
      ...schedulingByCars.data.unavailable_dates,
      ...dates,
    ]

    api.put(`/schedules/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedulingFinished'))
    .catch(() => Alert.alert('Não foi possivel agendar o carro. Tente novamente mais tarde'));
  }
    
  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      startFormat: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormat: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton onPress={handleBack}/>        
      </Header>
      
      <CarImages>
        <ImageSlider images={[
          car.thumbnail
        ]}/>
      </CarImages>
      
      <Details>
        <DetailHeader>
          <Car>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Car>
          <Info>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Info>
        </DetailHeader>
        <Specifications>
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
          <SpecificationItem description="380km/h" icon={SpeedSvg} />
        </Specifications>
        
        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
            </CalendarIcon>

            <Info>
              <DateTitle>DE</DateTitle>
              <DateValue>{rentalPeriod.startFormat}</DateValue>
            </Info>

            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <Info>
              <DateTitle>ATE</DateTitle>
              <DateValue>{rentalPeriod.endFormat}</DateValue>
            </Info>
        </RentalPeriod>
        <RentalPrice>
          <PriceDetails>
            <PriceDescription>TOTAL</PriceDescription>
            <PriceValue>{`${car.rent.price} x${dates.length} diárias`}</PriceValue>
          </PriceDetails>

          <PriceTotal>R$ {rentalTotal}</PriceTotal>
        </RentalPrice>
      </Details>

      
      <Footer>
        <Button title="Alugar carro" color={theme.colors.success} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}