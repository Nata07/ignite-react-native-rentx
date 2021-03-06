import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  font-family: ${({theme}) => theme.fonts.secondary_600}; 
  width: 100%;
  height: 113px;
  background-color: ${({theme}) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TotalCars = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
`;

export const TestCar = styled.View`
  flex: 1;
  padding: 15px;
`;

export const MyCarsButton = styled(RectButton)`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.main};

  position: absolute;
  right: 22px;
  bottom: 13px;
`;