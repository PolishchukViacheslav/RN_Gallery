/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Main } from './Main';
import { store } from './redux/store';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FullScreenFoto } from './components/FullScreenFoto';


class App extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Gallery" component={Main} />
            <Stack.Screen name="FullScreenFoto" component={FullScreenFoto} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

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
