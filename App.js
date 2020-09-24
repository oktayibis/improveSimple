import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AllReducers from './src/appState';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Router from './src/screens/Router';

// Stack navigation
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  const store = createStore(AllReducers, {}, applyMiddleware(ReduxThunk));
  FontAwesome.loadFont();
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Firstscreen"
              component={Router}
              options={{
                title: 'HOME',
                headerLeft: () => (
                  <FontAwesome name="bars" size={24} style={{marginLeft: 10}} />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
