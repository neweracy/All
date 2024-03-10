import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import ProductDetailsScreen from '../components/screens/ProductDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../components/screens/SignInScreen';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * Represents the home tab navigator.
 */
const Tab = createBottomTabNavigator();

/**
 * Represents the stack navigator.
 */
const Stack = createStackNavigator();

/**
 * Represents the home component.
 * It contains the home screen and product details screen.
 */
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='ProductDetails' component={ProductDetailsScreen} />
    </Tab.Navigator>
  );
}

/**
 * Represents the main app navigator.
 * It contains the navigation container and stack navigator.
 */
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Sign In'>
        <Stack.Screen name='Sign In' component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
