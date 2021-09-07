import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { ActionType } from './types/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// ROOT REDUCER
const rootReducer = combineReducers({
  auth: authReducer,
});

const getData = async () => {
  const jsonValue = await AsyncStorage.getItem('@AuthData');
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

const initialState = {
    auth: getData()
};

export type AppState = ReturnType<typeof rootReducer>; // AppState
type Thunk = ThunkMiddleware<AppState, ActionType>;

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk as Thunk)
);
export default store;
