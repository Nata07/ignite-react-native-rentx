import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native'

export const Container = styled.View`
 flex: 1;
 background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  font-family: ${({theme}) => theme.fonts.secondary_600}; 
  width: 100%;
  height: 273px;
  background-color: ${({theme}) => theme.colors.header};
  justify-content: flex-end;
  padding: 32px 24px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: 30px;
  margin-top: 34px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: 15px;
  margin-top: 24px;
`;

export const Details = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px 24px;
`;

export const DetailsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: 15px;
  color: ${({theme}) => theme.colors.text};
`;

export const DetailsQtd = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: 15px;
  color: ${({theme}) => theme.colors.title};
`;

export const ListCar = styled.View``;
