import { Dispatch } from 'react';
import {
  AUTH_USER_FAIL,
  LOGOUT_USER,
  SET_AUTH_USER,
} from '../constants/authConstants';
import { ActionType } from '../types/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const setAuth = () => async (dispatch: Dispatch<ActionType>) => {
  try {

    const response = await axios.get('https://reqres.in/api/users/1');
    const data = response.data.data;
    
    dispatch({
      type: SET_AUTH_USER,
      payload: data,
    });

    // SAVING AUTH DATA TO ASYNC STORAGE
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@AuthData', jsonValue);
    
  } catch (e: any) {
    dispatch({
      type: AUTH_USER_FAIL,
      payload: e.message,
    });
  }
};

export const logout = () => ({
  type: LOGOUT_USER,
});
