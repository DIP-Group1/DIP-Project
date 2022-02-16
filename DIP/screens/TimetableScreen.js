import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Spacer, Center, NativeBaseProvider} from "native-base";
import timetableTopTabs from '../navigation/timetableTopTabs';

const TimetableScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <NavigationContainer>
            <timetableTopTabs/>
          </NavigationContainer>
            <Text>
              Something is supposed to be here
            </Text>
        </View>   
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