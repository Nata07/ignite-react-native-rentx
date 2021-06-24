import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  margin-top: ${getStatusBarHeight() + 18}px;
  margin-left: 24px;
`;

export const CarImages = styled.View`
  margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Details = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    alignItems: 'center',
  },
  showVerticalScrollIndicator: false
})``;

export const DetailHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 12px;
`;

export const Car = styled.View``;

export const Brand = styled.Text`
  text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.title};
`;

export const Info = styled.View``;

export const Period = styled.Text`
text-transform: uppercase;
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_detail};`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.main};
`;

export const Specifications = styled.View`
  width: 100%;
  
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.text};
  line-height: 25px;
  text-align: justify;
`;

export const Footer = styled.View`
  align-items: center;
  padding: 20px ${getStatusBarHeight() + 8}px;
`;
