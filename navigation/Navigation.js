import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import NewLogin from '../screens/NewLogin';
import Home from '../screens/Home';
import ProductList from '../screens/ProductList';
import ProductDetail from '../screens/ProductDetail';
import ProductSort from '../screens/ProductSort';

const Stack = createStackNavigator();

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isAuthenticated ? 'ProductList' : 'Login'}>
        <Stack.Screen name="Login" component={NewLogin} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="ProductSort" component={ProductSort} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
