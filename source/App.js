import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { Main } from './components/Main';
import { store } from './redux/store';
import { FullScreenFoto } from './components/FullScreenFoto';
import { Stack } from './utils/utils';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Gallery" component={Main} />
          <Stack.Screen name="FullScreenFoto" component={FullScreenFoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
