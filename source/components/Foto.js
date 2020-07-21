import React from 'react';
import { Text, Image } from 'react-native';

export const Foto = (props) => {
  const { styles, foto } = props;
  return (
    <>
      <Image style={styles.tinyLogo} source={{ uri: foto.urls.small }} />
      <Text>Author: {foto.user.name}</Text>
      <Text style={styles.text}>
        Description:
        {foto.description ? foto.description : foto.alt_description}
      </Text>
    </>
  );
};
