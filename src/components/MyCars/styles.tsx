import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
 flex: 1;
 background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: 325px;

  background-color: ${({theme}) => theme.colors.header};
  
  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 10}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
  margin-top: 34px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_400};
  font-size: ${RFValue(15)}px;
  margin-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;


export const Details = styled.View`
  width: 100%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 24px 5px;
  
`;

export const LoadingContent = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const DetailsTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const DetailsQtd = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const ItemCar = styled.View`
  
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: white;
  padding: 12px 16px;

  border-radius: 4px;

  margin-bottom: 6px;
`;

export const TitleFooter = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Period = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const DateStart = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.title};
  margin-right: 12px;
`;

export const DateEnd = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
  color: ${({theme}) => theme.colors.title};
  margin-left: 12px;
`;

