import styled, { css } from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 280px;

  background: ${({theme}) => theme.colors.header};

  justify-content: center;
  padding: 25px;
  padding-top: ${getStatusBarHeight() + 15};
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(34)}px;

  margin-top: 20px;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin: 18px 0;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  text-transform: uppercase;

  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.secondary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  
  ${({selected, theme}) => !selected && css`
    border-bottom-width: 1px;
    border-bottom-color: white;
  `};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24
  },
  showVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

