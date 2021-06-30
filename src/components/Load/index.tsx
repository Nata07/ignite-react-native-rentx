import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export default function Load(){
  const theme = useTheme();

  return (
    <ActivityIndicator 
      color={theme.colors.main}
      size="small"
      style={{ flex: 1 }}
    />
  );
}