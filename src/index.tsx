import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routes from './routes';
import store, {persistor} from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle={'light-content'} backgroundColor="#8605B8" />
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
