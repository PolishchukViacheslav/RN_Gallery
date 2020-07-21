import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import reducer from './reducer';
//import your action creators used by dispatchers to alter your global state.
import { fetchData, fetchDataFulfilled, fetchDataRejected } from './reducer';
import { URL } from '../API/config';

//Define your action creators that will be responsible for asynchronouse operatiosn
export const getGallery = () => {
  //IN order to use await your callback must be asynchronous using async keyword.
  return async (dispatch) => {
    //Then perform your asynchronous operations.
    try {
      //Have it first fetch data from our starwars url.
      const unSplashPromise = await fetch(URL);
      dispatch(fetchData(true));
      //Then use the json method to get json data from api/
      const gallery = await unSplashPromise.json();
      console.log('gallery-----------', gallery);
      //Now when the data is retrieved dispatch an action altering redux state.
      dispatch(fetchDataFulfilled(gallery));
    } catch (error) {
      console.log('Getting gallery Error---------', error);
      dispatch(fetchDataRejected(error));
    }
  };
};

export const store = createStore(reducer, applyMiddleware(thunk));
