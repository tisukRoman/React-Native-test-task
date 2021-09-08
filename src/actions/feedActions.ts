import axios from 'axios';
import { Dispatch } from 'react';
import { GET_FEED_ITEMS, REFRESH_FEED_ITEMS } from '../constants/feedConstants';
import { ActionType } from '../types/ActionTypes';

export const getFeeds =
  (page: number) => async (dispatch: Dispatch<ActionType>) => {
    try {
      const { data } = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );

      dispatch({
        type: GET_FEED_ITEMS,
        payload: data,
      });
    } catch (e: any) {
      console.warn(e?.message);
    }
  };

export const refreshFeeds = () => async (dispatch: Dispatch<ActionType>) => {
  try {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=1&limit=5`
    );

    dispatch({
      type: REFRESH_FEED_ITEMS,
      payload: data,
    });
  } catch (e: any) {
    console.warn(e?.message);
  }
};
