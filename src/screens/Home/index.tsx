import React from 'react';
import { View, StatusBar } from 'react-native';

import { Container, Header, HeaderContent, TotalCars, TestCar } from './styles';

import Logo from '../../assets/logo.svg';

import { RFValue } from 'react-native-responsive-fontsize';
import {Car} from '../../components/Car';
import { ScrollView } from 'react-native';

export const Home: React.FC = () => {
  const data = [{
    name: 'RSç 5 Coupé',
    brand: 'Audi',
    period: 'Ao dia',
    price: '125,00',
    image_url: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png'
  },
  {
    name: 'PANAMERA',
    brand: 'PORSHE',
    period: 'Ao dia',
    price: '325,00',
    image_url: 'https://catalogo.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=440&h=330&q=80&t=true'
  },
  {
    name: 'PANAMERA',
    brand: 'PORSHE',
    period: 'Ao dia',
    price: '325,00',
    image_url: 'https://catalogo.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=440&h=330&q=80&t=true'
  },
  {
    name: 'PANAMERA',
    brand: 'PORSHE',
    period: 'Ao dia',
    price: '325,00',
    image_url: 'https://catalogo.webmotors.com.br/imagens/prod/347468/PORSCHE_PANAMERA_2.9_V6_EHYBRID_4_PDK_34746814472691347.png?s=fill&w=440&h=330&q=80&t=true'
  }
]

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
         <HeaderContent>
          <Logo 
              width={RFValue(108)}
              height={RFValue(12)}  
            />
            <TotalCars>Total: {data.length} carros</TotalCars> 
         </HeaderContent>
      </Header>
      
      <ScrollView>
        <TestCar>
          {data.map((car) => (
            <Car data={car} />
          ))}
        </TestCar>
      </ScrollView>

    </Container>
  );
}