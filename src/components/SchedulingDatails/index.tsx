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

interface Car {
  brand: string;
  name: string;
  price: string;
  period: string;
  image_url: String[];
}

interface CarProps {
  data: Car;
}

export function SchedulingDatails() {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <BackButton />        
      </Header>
      
      <CarImages>
        <ImageSlider images={[
          'https://catalogo.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=440&h=330&q=80&t=true'
        ]}/>
      </CarImages>
      
      <Details>
        <DetailHeader>
          <Car>
            <Brand>lamborghini</Brand>
            <Name>Huracan</Name>
          </Car>
          <Info>
            <Period>ao dia</Period>
            <Price>R$ 580</Price>
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
              <DateValue>18/06/2021</DateValue>
            </Info>

            <Feather
              name="chevron-right"
              size={RFValue(10)}
              color={theme.colors.text}
            />

            <Info>
              <DateTitle>ATE</DateTitle>
              <DateValue>18/06/2021</DateValue>
            </Info>
        </RentalPeriod>
        <RentalPrice>
          <PriceDetails>
            <PriceDescription>TOTAL</PriceDescription>
            <PriceValue>R$ 580 x3 diárias</PriceValue>
          </PriceDetails>

          <PriceTotal>R$ 2900</PriceTotal>
        </RentalPrice>
      </Details>

      
      <Footer>
        <Button title="Confirmar" color="" onClick={() => {console.log}}/>
      </Footer>
    </Container>
  );
}