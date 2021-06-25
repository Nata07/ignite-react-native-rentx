import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.header};

  align-items: center;
  justify-content: center;
`;

export const Details = styled.View`
  align-items: center;
  justify-content: center;
  width: 227px;
`;

export const Title = styled.Text`
  margin-top: 46px;
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.secondary_600};
  font-size: ${RFValue(30)}px;
`;

export const Description = styled.Text`
  margin-top: 16px;
  text-align: center;
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;

  margin-bottom: 40px;
`;

