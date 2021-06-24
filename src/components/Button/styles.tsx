import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

interface ButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 327px;
  align-items: center;
  justify-content: center;
  height: 56px;
  background: ${({theme, color}) => 
    color ? color : theme.colors.main
  };
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 600;
`;