import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Foto } from './Foto';
import { getGallery } from '../redux/store';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tinyLogo: {
    margin: 'auto',
    width: 300,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
  text: {
    width: 300,
  },
});

class FotoList extends PureComponent {
  componentDidMount() {
    this.props.getGallery();
  }
  render() {
    const { fotos, loading } = this.props;

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
                    this.props.navigation.navigate('FullScreenFoto', {
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
// export const FotoList = (props) => {

//   //useEffect

//   const gallery = useSelector((state) => ({
//     fotos: state.gallery,
//     loading: state.loading,
//   });

//   const bindThunk = useDispatch();
//   bindThunk(getGallery())

//   return <div>{todo.text}</div>
