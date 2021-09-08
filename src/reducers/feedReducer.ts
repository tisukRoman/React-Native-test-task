import { GET_FEED_ITEMS, REFRESH_FEED_ITEMS } from '../constants/feedConstants';
import { ActionType } from '../types/ActionTypes';

export const feedReducer = (state = [], action: ActionType) => {
  switch (action.type) {
    case GET_FEED_ITEMS:
      return [...state, ...action.payload];
    case REFRESH_FEED_ITEMS:
      return action.payload;
    default:
      return state;
  }
};
