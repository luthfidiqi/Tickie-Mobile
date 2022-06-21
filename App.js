import React from 'react';
import MainstackNavigator from './src/navigation';
import {NativeBaseProvider} from 'native-base';

import {Provider} from 'react-redux';
import stores from './src/stores';
const {persistor, store} = stores;

function App() {
    return (
      <Provider store={store}>
        {/* <NativeBaseProvider> */}
          <MainstackNavigator />
        {/* </NativeBaseProvider> */}
      </Provider>
    );
  }

export default App;