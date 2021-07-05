import React from 'react';

import { StatusBar } from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';

import { BackButton } from '../BackButton';
import { ImageSlider } from '../ImageSlider';
import { SpecificationItem } from '../SpecificationItem';
import { Button } from '../Button';

import SpeedSvg from '../../assets/speed.svg';

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
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface Car {
  id: string;
  brand: string;
  name: string;
  rent: {
    price: string;
    period: string;
  }
  thumbnail: string;
  photos: string[];
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

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
    // console.log(scrollY.value)
  });

  const headerStyleAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  });
  const sliderCarsStyleAnimation = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Animated.View 
        style={[headerStyleAnimation]}
      >
        <Header>
          <BackButton onPress={handleBack}/>        
        </Header>
        
        <Animated.View style={[sliderCarsStyleAnimation]}>
          <CarImages>
            <ImageSlider images={car.photos}/>
          </CarImages>
        </Animated.View>
      </Animated.View>
      
      <Animated.ScrollView 
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </Description>
          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </Description>
          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </Description>
          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </Description>
          <Description>
            Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
            É um belíssimo carro para quem gosta de acelerar.
          </Description>

        </Details>
      </Animated.ScrollView>
      <Footer>
        <Button title="Confirmar" color="" onPress={handleScheduling}/>
      </Footer>
    </Container>
  );
}