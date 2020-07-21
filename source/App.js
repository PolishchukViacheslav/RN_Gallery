/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Main } from './Main';
import thunk from 'redux-thunk';

const initialState = {
  gallery: [],
  isLoading: false,
};
const SET_GALLERY = 'set_gallery';
const set_gallery = (fotos) => ({
  type: SET_GALLERY,
  payload: fotos,
});

const rootReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log(store);

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e6e4e1',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
