import React from 'react';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const style = {
  width: windowWidth,
  height: windowHeight,
};

export const FullScreenFoto = ({ route }) => {
  const { url } = route.params;
  return <Image source={{ uri: url }} style={style} />;
};
