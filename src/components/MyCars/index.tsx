import React, { useState, useEffect } from 'react';

import AppLoading from 'expo-app-loading';

import { useNavigation } from '@react-navigation/native';
import { FlatList, StatusBar, Text } from 'react-native';
import api from '../../services/api';
import { BackButton } from '../BackButton';
import { Car } from '../Car';
import ArrowSvg from '../../assets/arrow.svg'

import {
  Container,
  Header,
  Title,
  Description,
  Content,
  Details,
  DetailsTitle,
  DetailsQtd,
  LoadingContent,
  ItemCar,
  Footer,
  TitleFooter,
  Period,
  DateStart,
  DateEnd
} from './styles';
import Load from '../Load';

interface CarItem {
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
  car: CarItem;
  startDate: string;
  endDate: string;
  user_id: number;
  id: string;
}

export function MyCars(){
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState<CarProps[]>([]);
  function handleBack(){
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try{
        const response = await api.get(`schedules_byuser?user_id=1`);
        console.log(response.data);
        setCars(response.data);
      }catch(error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }

    fetchCars();
  }, [])
  return (
    <Container>
      <StatusBar barStyle="light-content" />
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

      <Content>
        {loading ? (
            <>
              <LoadingContent>
                <Load />
              </LoadingContent>
            </>
          ) :
        (
        <>
          <Details>
            <DetailsTitle>{cars.length > 0 ? `Carros agendados` : `Você ainda não possui carros agendados`}</DetailsTitle>
            {cars.length > 0 && (<DetailsQtd>{cars.length}</DetailsQtd>)}
          </Details>
          
          <FlatList 
            data={cars}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <>
                <ItemCar key={item.car.id}>
                  <Car data={item.car}/>
                  <Footer>
                    <TitleFooter>Periodo</TitleFooter>
                    <Period>
                      <DateStart>{item.startDate}</DateStart>
                      <ArrowSvg width={25} />
                      <DateEnd>{item.endDate}</DateEnd>
                    </Period>
                  </Footer>
                </ItemCar>
              </>
            )}
          />
        </>  
        )}
      </Content>


          
    </Container>
  );
}