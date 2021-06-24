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

interface Car {
  brand: string;
  name: string;
  price: string;
  period: string;
  image_url: string;
}

interface CarProps {
  data: Car;
}

export function Car({data}: CarProps) {
  return (
    <Container>
      <Content>
          <TextDescription>{data.brand}</TextDescription>
          <Title>{data.name}</Title>

          <About>
            <Rent>
              <TextDescription>{data.period}</TextDescription>
              <Value>R$: {data.price}</Value>
            </Rent>

            <Type>
              <GasolineImage />
            </Type>
          </About>

      </Content>
      <CarImage 
        source={ {uri: data.image_url }}
        resizeMode="contain"  
      />
    </Container>
  );
}