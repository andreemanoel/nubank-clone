import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RouterProvider from './services/routes/provider';
import store, {persistor} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle={'light-content'} backgroundColor="#8D00DA" />
        <GestureHandlerRootView style={{flex: 1}}>
          <RouterProvider />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
