import React, { useRef, useState } from 'react';
import {  } from 'react';
import { ViewToken } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0)

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!
    setImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {images.map((_, index) => (
          <ImageIndex 
            key={String(index)}
            active={index === imageIndex}
          />
        ))}
      </ImageIndexes>

        <FlatList
          data={images}
          keyExtractor={key => key}
          renderItem={({item}) => (
            <CarImageWrapper>
              <CarImage 
                source={{ uri: item }} 
                resizeMode="contain"  
              />
            </CarImageWrapper>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
        />
    </Container>
  );
}
