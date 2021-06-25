import React from 'react';
import { NativeScreenContainer } from 'react-native-screens';
import { StackNavigator } from './stack.routes';


export function Routes(){
 return (
   <NativeScreenContainer>
       <StackNavigator />
   </NativeScreenContainer>

 );
}