import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { ActionType } from './types/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { feedReducer } from './reducers/feedReducer';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer
});

// GET INITIAL AUTH DATA FROM ASYNC STORAGE
const getAuthData = async () => {
  const jsonValue = await AsyncStorage.getItem('@AuthData');
  return jsonValue
    ? JSON.parse(jsonValue)
    : {
        isAuthorized: false,
        email: '',
        password: '',
        name: '',
        img: '',
      };
};

// INITIAL STATE
const initialState = {
  auth: getAuthData(),
};

export type AppState = ReturnType<typeof rootReducer>; // AppState
type Thunk = ThunkMiddleware<AppState, ActionType>;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk as Thunk)
);
export default store;
