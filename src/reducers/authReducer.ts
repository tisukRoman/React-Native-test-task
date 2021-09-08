import {
  AUTH_USER_FAIL,
  LOGOUT_USER,
  SET_AUTH_USER,
} from '../constants/authConstants';
import { ActionType } from '../types/ActionTypes';
import { AuthState } from '../types/StateTypes';

const initialState: AuthState = {
  isAuthorized: false,
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: '',
};

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_AUTH_USER:
      const { email, first_name, last_name, avatar } = action.payload;
      return { isAuthorized: true, email, first_name, last_name, avatar };
    case AUTH_USER_FAIL:
      return action.payload;
    case LOGOUT_USER:
      return {
        isAuthorized: false,
        email: '',
        password: '',
        name: '',
        img: '',
      };
    default:
      return state;
  }
};
