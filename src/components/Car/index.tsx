import React from 'react';
import { 
  Container, 
  Content,
  TextDescription,
  Title,
  About,
  Rent,
  Type,
  Value,
  CarImage
} from './styles';

import GasolineImage from '../../assets/gasoline.svg'
import { RectButtonProps } from 'react-native-gesture-handler';

interface Car {
  brand: string;
  name: string;
  rent: {
    price: number;
    period: string;
  }
  thumbnail: string;
  photos: string[];
}

interface CarProps extends RectButtonProps{
  data: Car;
}

export function Car({data, ...rest}: CarProps) {
  return (
    <Container {...rest}>
      <Content>
          <TextDescription>{data.brand}</TextDescription>
          <Title>{data.name}</Title>

          <About>
            <Rent>
              <TextDescription>{data.rent.period}</TextDescription>
              <Value>R$: {data.rent.price}</Value>
            </Rent>

            <Type>
              <GasolineImage />
            </Type>
          </About>

      </Content>
      <CarImage 
        source={{ uri: data.photos[0]} }
        resizeMode="contain"  
      />
    </Container>
  );
}