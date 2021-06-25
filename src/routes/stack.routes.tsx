import React from 'react';

import  { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { DetailCar } from '../components/DetailCar';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDatails } from '../components/SchedulingDatails';
import { SchedulingFinished } from '../screens/SchedulingFinished';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  return(
    <Navigator headerMode="none">
      <Screen 
        name="Home"
        component={Home}
      />
      <Screen 
        name="DetailCar"
        component={DetailCar}
      />
      <Screen 
        name="Scheduling"
        component={Scheduling}
      />
      <Screen 
        name="SchedulingDatails"
        component={SchedulingDatails}
      />
      <Screen 
        name="SchedulingFinished"
        component={SchedulingFinished}
      />
    </Navigator>
  )

}