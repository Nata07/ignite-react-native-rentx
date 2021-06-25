import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 100%;
  height: 126px;
  
  background-color: ${({theme}) => theme.colors.background_secondary};

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  border-radius: 8px;
  padding: 24px;
  margin-bottom: 16px;
`;

export const Content = styled.View` 
  
`;

export const TextDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const Rent = styled.View`
  margin-right: 24px;
  margin-top: 12px;
`;

export const Type = styled.View`
  flex-direction: row;
  margin-top: 12px;
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(15)}px;

  text-transform: uppercase;
`;

export const CarImage = styled.Image`
  width: 167px;
  height: 87px;
`;