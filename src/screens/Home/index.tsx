import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {Car} from '../../components/Car';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import { Container, Header, HeaderContent, TotalCars, TestCar } from './styles';

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

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {  
    async function getCars() {
      try{
        const response = await api.get('/cars')
        setCars(response.data);
        console.log(response);
      }catch(error) {
        console.log('error');
        console.log(error);
      }
    }

    getCars();
  }, []);

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

  function handleDetailsCar(){
    navigation.navigate('DetailCar');
  } 

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
          {cars.map((car) => (
            <Car key={car.id} data={car} onPress={handleDetailsCar}/>
          ))}
        </TestCar>
      </ScrollView>

    </Container>
  );
}