import { Dispatch } from 'react';
import { AUTH_USER_FAIL, SET_AUTH_USER } from '../constants/authConstants';
import { ActionType } from '../types/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const setAuth = () => async (dispatch: Dispatch<ActionType>) => {
  try {
    const FakeFetch = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          isAuthorized: true,
          email: 'email@gmail.com',
          password: '12345678q',
          name: 'George',
          img: 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png',
        });
      }, 1000);
    });

    // FAKE FETCHING
    const response = await FakeFetch;

    // SET DATA FROM SERVER TO AUTH STATE
    dispatch({
      type: SET_AUTH_USER,
      payload: response,
    });

    // SAVING AUTH DATA TO ASYNC STORAGE
    const jsonValue = JSON.stringify(response);
    await AsyncStorage.setItem('@AuthData', jsonValue);

  } catch (e: any) {
    dispatch({
      type: AUTH_USER_FAIL,
      payload: e.message,
    });
  }
};
