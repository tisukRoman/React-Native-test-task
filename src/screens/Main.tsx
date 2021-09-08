import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feeds } from './Feeds';
import { Profile } from './Profile';
import { COLORS } from '../styles/colors';
import { AppState } from '../store';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export const Main = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const auth = useSelector((state: AppState) => state.auth);

  
  useEffect(() => {
    if (!auth?.isAuthorized) {
      navigation.navigate('Login');
    }
    navigation.addListener('beforeRemove', (e) => {
      return;
    });
  }, [auth, navigation]);

  return (
    <Tab.Navigator
      initialRouteName='Feeds'
      style={{
        backgroundColor: COLORS.LIGHT_GREY,
        paddingTop: insets.top,
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
