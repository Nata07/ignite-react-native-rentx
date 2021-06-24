import React from 'react';
import { View } from 'react-native';

import { 
  Container, 
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';


interface ImageSliderProps {
  images: string[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        <CarImage 
          source={{ uri: images[0] }} 
          resizeMode="contain"  
        />
      </CarImageWrapper>
    </Container>
  );
}
