import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { Header } from 'react-native-elements';
import { Foto } from './Foto';

const fotos = [
  {
    id: '1gLdTsX3_70',
    created_at: '2020-07-01T18:30:14-04:00',
    updated_at: '2020-07-14T01:07:50-04:00',
    promoted_at: null,
    width: 6016,
    height: 4016,
    color: '#F8FBF9',
    description: null,
    alt_description: 'macbook pro on brown sofa',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0ODk1MX0',
      full:
        'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0ODk1MX0',
      regular:
        'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0ODk1MX0',
      small:
        'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0ODk1MX0',
      thumb:
        'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0ODk1MX0',
    },
    links: {
      self: 'https://api.unsplash.com/photos/1gLdTsX3_70',
      html: 'https://unsplash.com/photos/1gLdTsX3_70',
      download: 'https://unsplash.com/photos/1gLdTsX3_70/download',
      download_location: 'https://api.unsplash.com/photos/1gLdTsX3_70/download',
    },
    categories: [],
    likes: 155,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: {
      impression_urls: [
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7348934&rnd=[INSERT_CACHEBUSTER_HERE]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
        'https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=7367766&rnd=[timestamp]&gdpr=&gdpr_consent=&redir=https://secure.insightexpressai.com/adserver/1pixel.gif',
      ],
      tagline: 'Designed to be the Best',
      tagline_url: 'http://www.dell.com/xps',
      sponsor: {
        id: '2DC3GyeqWjI',
        updated_at: '2020-07-19T08:03:59-04:00',
        username: 'xps',
        name: 'XPS',
        first_name: 'XPS',
        last_name: null,
        twitter_username: 'Dell',
        portfolio_url: 'http://www.Dell.com/XPS',
        bio:
          'Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.',
        location: null,
        links: {
          self: 'https://api.unsplash.com/users/xps',
          html: 'https://unsplash.com/@xps',
          photos: 'https://api.unsplash.com/users/xps/photos',
          likes: 'https://api.unsplash.com/users/xps/likes',
          portfolio: 'https://api.unsplash.com/users/xps/portfolio',
          following: 'https://api.unsplash.com/users/xps/following',
          followers: 'https://api.unsplash.com/users/xps/followers',
        },
        profile_image: {
          small:
            'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
          medium:
            'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
          large:
            'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
        },
        instagram_username: 'dell',
        total_collections: 0,
        total_likes: 0,
        total_photos: 26,
        accepted_tos: true,
      },
    },
    user: {
      id: '2DC3GyeqWjI',
      updated_at: '2020-07-19T08:03:59-04:00',
      username: 'xps',
      name: 'XPS',
      first_name: 'XPS',
      last_name: null,
      twitter_username: 'Dell',
      portfolio_url: 'http://www.Dell.com/XPS',
      bio:
        'Designed to be the best, with cutting edge technologies, exceptional build quality, unique materials and powerful features.',
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/xps',
        html: 'https://unsplash.com/@xps',
        photos: 'https://api.unsplash.com/users/xps/photos',
        likes: 'https://api.unsplash.com/users/xps/likes',
        portfolio: 'https://api.unsplash.com/users/xps/portfolio',
        following: 'https://api.unsplash.com/users/xps/following',
        followers: 'https://api.unsplash.com/users/xps/followers',
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1593436914961-40416e2f9c5dimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
      },
      instagram_username: 'dell',
      total_collections: 0,
      total_likes: 0,
      total_photos: 26,
      accepted_tos: true,
    },
  },
];

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

export class FotoList extends React.Component {
  state = {
    fotos: fotos,
  };

  render() {
    return (
      <>
        {/* <Header centerComponent={{ text: 'MY TITLE' }} /> */}
        <View style={styles.container}>
          {this.state.fotos.map((foto) => (
            <Foto key={foto.id} styles={styles} foto={foto} />
          ))}
        </View>
      </>
    );
  }
}
