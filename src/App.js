import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
