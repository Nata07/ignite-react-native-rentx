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

export function DetailCar() {
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
        <Description>
          Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
          É um belíssimo carro para quem gosta de acelerar.
        </Description>

      </Details>
      <Footer>
        <Button title="Confirmar" color="" onClick={() => {console.log}}/>
      </Footer>
    </Container>
  );
}