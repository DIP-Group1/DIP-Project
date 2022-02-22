import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import js files
import AddCategory from './AddCategory';
import AddDeadline from './AddDeadline';
import AddTask from './AddTask';
import GwennModal from './GwennModal';

const App = () => {
  return (
    <NavigationContainer>
      <AddCategory/>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

