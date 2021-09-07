import { AUTH_USER_FAIL, SET_AUTH_USER } from '../constants/authConstants';
import { ActionType } from '../types/ActionTypes';
import { authState } from '../types/StateTypes';

const initialState: authState = {
  isAuthorized: false,
  email: '',
  password: '',
  name: '',
  img: '',
};

export const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_AUTH_USER:
      const { isAuthorized, email, password, name, img } = action.payload;
      return { isAuthorized, email, password, name, img };
    case AUTH_USER_FAIL:
      return action.payload;
    default:
      return state;
  }
};
