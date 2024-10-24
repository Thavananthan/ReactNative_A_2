import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AdditionalDetailsScreen from '../screens/AdditionalDetailsScreen';
import DigitalProducts from '../screens/DigitalProducts';

export type RootStackParamList = {
  Home: undefined;  // Home screen does not expect any params
  AdditionalDetailsScreen: {   name: string;
    description: string;
    price: number;
    photos: string[];};  // AdditionalDetailsScreen expects a param 'someParam'
  DigitalProducts: undefined;  // DigitalProducts screen does not expect any params
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AdditionalDetailsScreen" component={AdditionalDetailsScreen} />
        <Stack.Screen name="DigitalProducts" component={DigitalProducts} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
