import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import ProductDetailsScreen from '../components/screens/ProductDetailsScreen';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='ProductDetails' component={ProductDetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
   
  );
};

export default AppNavigator;
