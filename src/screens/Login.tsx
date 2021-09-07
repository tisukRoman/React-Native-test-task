import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../actions/authActions';
import { COLORS } from '../styles/colors';
import { AppState } from '../store';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '../components/AppButton';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isAuthorized = useSelector(
    (state: AppState) => state.auth.isAuthorized
  );

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailWarning, setEmailWarning] = useState<string>('');
  const [passwordWarning, setPasswordWarning] = useState<string>('');

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitHandler = () => {
    // Clear previous warnings
    setEmailWarning('');
    setPasswordWarning('');

    // Validation Middlewares
    debugger;
    if (!email) {
      setEmailWarning('Email field is required');
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailWarning('Email is not Valid');
      return;
    }
    if (!password) {
      setPasswordWarning('Password field is required');
      return;
    }
    if (password.length < 8) {
      setPasswordWarning('Password length min 8 characters');
      return;
    }

    // Finally
    dispatch(setAuth());
    navigation.navigate('Main');
  };

  useEffect(() => {
    if (isAuthorized) {
      navigation.navigate('Main');
    }
  }, [isAuthorized]);

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.container}>
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={styles.textInput}
          placeholder='Email'
          placeholderTextColor={COLORS.GREY}
          keyboardType='email-address'
          autoFocus={true}
          autoCompleteType='email'
        />
        <Text style={styles.warning}>{emailWarning}</Text>
        <TextInput
          onChangeText={setPassword}
          value={password}
          style={styles.textInput}
          placeholderTextColor={COLORS.GREY}
          placeholder='Password'
          autoCompleteType='password'
          secureTextEntry={true}
        />
        <Text style={styles.warning}>{passwordWarning}</Text>
        <AppButton handler={submitHandler}>Login</AppButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK,
  },
  container: {
    padding: 5,
    width: '80%',
    height: '30%',
  },
  textInput: {
    marginTop: 10,
    height: 40,
    padding: 5,
    color: 'white',
    fontSize: 16,
  },
  warning: {
    color: COLORS.RED,
  },
});
