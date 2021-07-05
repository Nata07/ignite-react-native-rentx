import React from 'react';

import  { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { DetailCar } from '../components/DetailCar';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDatails } from '../components/SchedulingDatails';
import { SchedulingFinished } from '../screens/SchedulingFinished';
import { MyCars } from '../components/MyCars';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(){
  return(
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen 
        name="Splash"
        component={Splash}
      />
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
      <Screen 
        name="MyCars"
        component={MyCars}
      />
    </Navigator>
  )

}