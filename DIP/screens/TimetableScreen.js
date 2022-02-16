import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import timetableTopTabs from '../navigation/timetableTopTabs';

const TimetableScreen = ({navigation}) => {
    return (
            <NavigationContainer>
            <timetableTopTabs/>
            <Text>
              Something is supposed to be here
            </Text>

          </NavigationContainer>
    );
};

export default TimetableScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
});