import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Chats from './screens/Chats'
import MyBooks from './screens/MyBooks'
import Profile from './screens/Profile'
import Login from './screens/Login'



export default createBottomTabNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: 'Exit',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-exit-outline" color={tintColor} size={24} />
      )
    }
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home-outline" color={tintColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'ASKIDA KİTAP',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-pricetag-outline" color={tintColor} size={24} />
      )
    }
  },
  MyBooks: {
    screen: MyBooks,
    navigationOptions: {
      tabBarLabel: 'KİTAPLIĞIM',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-book-outline" color={tintColor} size={24} />
      )
    }
  },
  Chats: {
    screen: Chats,
    navigationOptions: {
      tabBarLabel: 'MESAJ',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFİL',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person-outline" color={tintColor} size={24} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: 'purple',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  })