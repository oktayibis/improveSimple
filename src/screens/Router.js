import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screens
import Home from './home';

// Theme
import {Colors} from '../constant/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreens = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Settings':
            iconName = 'th-large';
            break;
          case 'Cart':
            iconName = 'shopping-cart';
            break;
          case 'Favs':
            iconName = 'heart';
            break;
          case 'User':
            iconName = 'user';
            break;
          default:
            break;
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.softRed,
      inactiveTintColor: Colors.light,
      showLabel: false,
    }}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Settings" component={Home} />
    <Tab.Screen name="Cart" component={Home} />
    <Tab.Screen name="Favs" component={Home} />
    <Tab.Screen name="User" component={Home} />
  </Tab.Navigator>
);
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Firstscreen"
          component={TabScreens}
          options={{
            title: 'HOME',
            headerLeft: () => (
              <FontAwesome name="bars" size={24} style={{marginLeft: 10}} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
