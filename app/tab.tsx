import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import Level from './level';
import Grammar from './grammar';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator
          initialRouteName="Level"
          screenOptions={{
            tabBarStyle: { backgroundColor: '#49BBBD' }, 
            tabBarActiveTintColor: "#4b3ca7",  
            tabBarInactiveTintColor: '#000000', 
          }}
        >
          <Tab.Screen
            name="Level"
            component={Level}
            options={{
              tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Grammar"
            component={Grammar}
            options={{
              tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      );
    };
    
    export default TabNavigation;