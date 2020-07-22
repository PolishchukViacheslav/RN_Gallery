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
import { styles } from './App';
import FotoList from './components/FotoList';

export const Main = (props) => {
  // console.log('wertger');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <FotoList navigation={props.navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
