import React from 'react';
import { Text, Image, Button, TouchableOpacity } from 'react-native';

export const Foto = (props) => {
  const { styles, foto, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: foto.urls.small }}
        onPress={onPress}
      />
      <Text>Author: {foto.user.name}</Text>
      <Text style={styles.text}>
        Description:
        {foto.description ? foto.description : foto.alt_description}
      </Text>
    </TouchableOpacity>
  );
};
