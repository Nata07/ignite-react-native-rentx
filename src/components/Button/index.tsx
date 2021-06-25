import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color: string;
  onPress?: () => void;
}

export function Button({ title, color, onPress}: ButtonProps) {
  return (
    <Container color={color} onPress={onPress}>
      <Title>{title}</Title>
    </Container>

  )
}
