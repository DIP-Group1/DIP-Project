import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TimeTableContainer from '../components/TimeTableContainer';
import TodoContainer from '../components/TodoContainer';
import TodayContainer from '../components/TodayContainer';
import Moment from 'react-moment';
import moment from 'moment';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="TimeTableContainer"
      screenOptions={{
        tabBarActiveTintColor: '#5F5DA6',
        tabBarInactiveTintColor: '#A2A4A7',
        tabBarLabelStyle: { fontSize: 12},
        tabBarPressColor: "#A2A4A7",
        tabBarStyle: { backgroundColor: '#BFC3D9' },
      }}
    >
      <Tab.Screen
        name="TimeTableContainer"
        component={TimeTableContainer}
        options={{ tabBarLabel: 'Calendar' }}
      />
      <Tab.Screen
        name="TodoContainer"
        component={TodoContainer}
        options={{ tabBarLabel: 'TODO' }}
      />
      <Tab.Screen
        name="TodayContainer"
        component={TodayContainer}
        options={{ tabBarLabel: 'Today' }}
      />
    </Tab.Navigator>
  );
}

const mDay = moment().format('dddd').substring(0,3).toUpperCase;

export default function TopBar() {
  return (
    <NavigationContainer independent={true}>
      <Box alignItems="center" width="350px" borderWidth="1" borderColor="#CA9481" shadow="3" bg="#CA9481" p="5" rounded="8">
        <HStack>
          <Text>
            {mDay}
          </Text>
        </HStack>
        <HStack>
          <Text>
            {mDay}
          </Text>
        </HStack>
      </Box>
      <MyTabs />
    </NavigationContainer>
  );
}