import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Foto } from './Foto';
import { getGallery } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from '../utils/utils';

const FotoList = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);
  const gallery = useSelector((state) => ({
    fotos: state.gallery,
    loading: state.loading,
  }));
  if (!gallery.loading) {
    return (
      <>
        <View style={styles.container}>
          {gallery.fotos.length ? (
            gallery.fotos.map((foto) => (
              <Foto
                key={foto.id}
                styles={styles}
                foto={foto}
                onPress={() =>
                  props.navigation.navigate('FullScreenFoto', {
                    url: foto.urls.regular,
                  })
                }
              />
            ))
          ) : (
            <Text>No fotos</Text>
          )}
        </View>
      </>
    );
  } else {
    return <Text>Loading..........</Text>;
  }
};

export default FotoList;
