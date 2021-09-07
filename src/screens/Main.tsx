import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feeds } from './Feeds';
import { Profile } from './Profile';
import { COLORS } from '../styles/colors';

const Tab = createMaterialTopTabNavigator();

export const Main = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName='Feeds'
      style={{
          backgroundColor: COLORS.LIGHT_GREY,
          paddingTop: insets.top
      }}
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: COLORS.LIGHT_GREY },
        tabBarAllowFontScaling: true,
        tabBarActiveTintColor: COLORS.WHITE, 
      }}
    >
      <Tab.Screen name='Feeds' component={Feeds} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};

/* const styles = StyleSheet.create({

}); */
