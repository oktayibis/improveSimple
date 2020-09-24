import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Screens
import Home from './home';
import {Colors, Margins} from '../constant/theme';
const Tab = createBottomTabNavigator();

const Router = () => {
  FontAwesome.loadFont();
  return (
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
};

export default Router;
