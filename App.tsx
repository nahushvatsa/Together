/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import SignIn from './screens/SignIn';
import Discover from './screens/Discover';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from './screens/SignUp';

const Tab = createBottomTabNavigator();

function Chat() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AuthStack = createStackNavigator();
// const HomeStack = createStackNavigator();
// const ChatStack = createStackNavigator();
// const CalendarStack = createStackNavigator();
// const SearchStack = createStackNavigator();

function AuthStackScreen() {
  return (
    // user.size == 0 ? (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Sign In"
        component={SignIn}
        options={{
          tabBarLabel: 'Login',
          headerShown: false,
          gesturesEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="Sign Up"
        component={SignUp}
        options={{
          tabBarLabel: 'Sign Up',
          headerShown: false,
          gesturesEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="User Profile"
        component={UserProfile}
        options={{
          tabBarLabel: 'User Profile',
          headerShown: false,
          gesturesEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarLabel: 'Discover',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={AuthStackScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
