import React from 'react';
import { StatusBar } from 'react-native';

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
  Description,
  Footer
} from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';

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

export function DetailCar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as CarProps;

  function handleScheduling() {
    navigation.navigate('Scheduling', { car });
  }

  function handleBack() {
    navigation.goBack();
  }

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
        <Description>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </Description>

      </Details>
      <Footer>
        <Button title="Confirmar" color="" onPress={handleScheduling}/>
      </Footer>
    </Container>
  );
}