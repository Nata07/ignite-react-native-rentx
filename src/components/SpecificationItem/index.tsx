import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container, Description } from './styles';

interface SpecificationItemProps {
  description: string;
  icon: React.FC<SvgProps>;
}

export function SpecificationItem({ description, icon: Icon }: SpecificationItemProps) {
  return (
    <Container>
      <Icon 
        width={32}
        height={32}
        />
      <Description>{description}</Description>
    </Container>
  )
}