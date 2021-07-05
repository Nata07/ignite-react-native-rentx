import React, { useState, useEffect } from 'react';

import Animated, {
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import {Car} from '../../components/Car'; 
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import { Container, Header, HeaderContent, TotalCars, TestCar, MyCarsButton } from './styles';
import theme from '../../styles/theme';
import { RectButton } from 'react-native-gesture-handler';

interface Car {
  id: string;
  brand: string;
  name: string;
  rent: {
    price: number;
    period: string;
  }
  thumbnail: string;
  photos: string[];
}

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [cars, setCars] = useState<Car[]>([]);

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);


  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value}
      ]
    }
  })

  useEffect(() => {  
    async function getCars() {
      try{
        const response = await api.get('/cars')
        setCars(response.data);
      }catch(error) {
        console.log('error');
        console.log(error);
      } 
    }

    getCars();
  }, []);

  function handleDetailsCar(car: Car){
    navigation.navigate('DetailCar', { car });
  } 

  async function handleOpenCarsScheduled(){
    navigation.navigate('MyCars');
    
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
            <TotalCars>Total: {cars.length} carros</TotalCars> 
         </HeaderContent>
      </Header>
      
      <ScrollView>
        <TestCar>
          {cars.map((car) => (
            <Car key={car.id} data={car} onPress={() => handleDetailsCar(car)}/>
          ))}
        </TestCar>
      </ScrollView>
      
      <Animated.View 
        style={[
          myCarsButtonStyle,
          {
            position: 'absolute',
            bottom: 13,
            right: 22,
            backgroundColor: theme.colors.main,
            borderRadius: 50,
            padding: 8
            
          }
        ]}
      >
        <ButtonAnimated onPress={handleOpenCarsScheduled}>
          <Ionicons 
            name="ios-car-sport"
            size={34} 
            color={theme.colors.shape}
          />
        </ButtonAnimated>
      </Animated.View>
    
    </Container>
  );
}