import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './src/screens/Login';
import { Main } from './src/screens/Main';
import { Provider } from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
