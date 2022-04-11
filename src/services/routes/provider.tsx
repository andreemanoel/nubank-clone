import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  InitialScreenRoute,
  HomeRoute,
  FormRoute,
  PixRoute,
  PickerRoute,
  FormAppVendaRoute,
} from '.';
import {navigationRef} from './utils';

const Stack = createNativeStackNavigator();

const RouterProvider: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={InitialScreenRoute.name}>
        <Stack.Screen
          name={InitialScreenRoute.name}
          component={InitialScreenRoute.screen}
        />
        <Stack.Screen name={HomeRoute.name} component={HomeRoute.screen} />
        <Stack.Screen name={FormRoute.name} component={FormRoute.screen} />
        <Stack.Screen name={PixRoute.name} component={PixRoute.screen} />
        <Stack.Screen name={PickerRoute.name} component={PickerRoute.screen} />
        <Stack.Screen
          name={FormAppVendaRoute.name}
          component={FormAppVendaRoute.screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RouterProvider;
