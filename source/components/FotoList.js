import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Foto } from './Foto';
import { getGallery } from '../redux/store';
import { connect } from 'react-redux';
import { styles } from '../utils/utils';

class FotoList extends PureComponent {
  componentDidMount() {
    this.props.getGallery();
  }
  render() {
    const { fotos, loading, navigation } = this.props;

    if (!loading) {
      return (
        <>
          <View style={styles.container}>
            {fotos.length ? (
              fotos.map((foto) => (
                <Foto
                  key={foto.id}
                  styles={styles}
                  foto={foto}
                  onPress={() =>
                    navigation.navigate('FullScreenFoto', {
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
  }
}

const mapStateToProps = (state) => ({
  fotos: state.gallery,
  loading: state.loading,
});

const mapDispatchToProps = {
  getGallery,
};

export default connect(mapStateToProps, mapDispatchToProps)(FotoList);
