import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { setLoading, fetchDataFulfilled, fetchDataRejected } from './reducer';
import { URL } from '../API/config';

export const getGallery = () => {
  return async (dispatch) => {
    try {
      const unSplashPromise = await fetch(URL);
      dispatch(setLoading(true));
      const gallery = await unSplashPromise.json();
      dispatch(fetchDataFulfilled(gallery));
    } catch (error) {
      dispatch(fetchDataRejected(error));
    }
  };
};

export const store = createStore(reducer, applyMiddleware(thunk));
