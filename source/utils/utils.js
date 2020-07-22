import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tinyFoto: {
    margin: 'auto',
    width: 300,
    height: 300,
  },
  text: {
    width: 300,
  },
  scrollView: {
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#e6e4e1',
  },
});

export const Stack = createStackNavigator();
