import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { styles } from '../utils/utils';
import FotoList from './FotoList';

export const Main = (props) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <FotoList navigation={props.navigation} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
