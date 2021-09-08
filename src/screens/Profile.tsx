import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import { AppButton } from '../components/AppButton';
import { ProfileItem } from '../components/ProfileItem';
import { COLORS } from '../styles/colors';

export const Profile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <View style={styles.container}>
      <ProfileItem />
      <AppButton handler={() => console.log('ss')}>
        Change theme to: light
      </AppButton>
      <AppButton handler={logoutHandler}>Logout</AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: COLORS.DARK,
    padding: 20,
  },
});
