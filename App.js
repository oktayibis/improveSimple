import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AllReducers from './src/appState';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Router from './src/screens/Router';

// Stack navigation

const App: () => React$Node = () => {
  const store = createStore(AllReducers, {}, applyMiddleware(ReduxThunk));
  FontAwesome.loadFont();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <Provider store={store}>
          <Router />
        </Provider>
      </SafeAreaView>
    </>
  );
};

export default App;
