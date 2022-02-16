import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import AddEvent from './AddEvent';
import AddDeadline from './AddDeadline';
import AddTask from './AddTask';

function AddCategory( {navigation} ) {
  const [name, onChangeName] = React.useState(null);
  const [AddInfo, onChangeInfo] = React.useState(null);

  return (

    <SafeAreaView>
      <View style={styles.Container}>
        <Text
          style={styles.Title}>
          Category Info
        </Text>
      </View>
      <View style={styles.HeaderBorder}/>

      {/* content */}
      <Text
        style={styles.Heading}>
        Name:
      </Text>
      <TextInput
        style={styles.Input}
        onChangeText={onChangeName}
        value={name}
        placeholder="e.g. Work / Study"
        keyboardType="default"
      />
      <Text
        style={styles.Heading}>
        Additional Info:
      </Text>
      <TextInput
        style={styles.Input}
        onChangeText={onChangeInfo}
        value={AddInfo}
        placeholder="e.g. Special arrangements, people"
        keyboardType="default"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Add Event")}>
        <Text style={styles.AddPagesHeader}>+ Add Event</Text>
      </TouchableOpacity>
      {/* <Text
        style={styles.Description}>
        No Event
      </Text> */}
      <View style={styles.AddPagesBorder}/>


      <TouchableOpacity onPress={() => navigation.navigate("Add Deadline")}>
        <Text style={styles.AddPagesHeader}>+ Add Deadline</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => navigation.navigate("Add Deadline")} title="Add Deadline" /> */}
      <View style={styles.AddPagesBorder}/>

      <TouchableOpacity onPress={() => navigation.navigate("Add Task")}>
        <Text style={styles.AddPagesHeader}>+ Add Task</Text>
      </TouchableOpacity>
      <View style={styles.AddPagesBorder}/>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

function AddEventScreen() {
  return (
    <AddEvent/>
  )
}

function AddDeadlineScreen() {
  return (
    <AddDeadline/>
  )
}

function AddTaskScreen() {
  return (
    <AddTask/>
  )
}

const Stack = createStackNavigator()

export default function CategoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add Category" component={AddCategory} />
      <Stack.Screen name="Add Event" component={AddEventScreen} />
      <Stack.Screen name="Add Deadline" component={AddDeadlineScreen} />
      <Stack.Screen name="Add Task" component={AddTaskScreen} />
    </Stack.Navigator>
  )
};

const styles = StyleSheet.create({
  Input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#979797',
    borderRadius: 8,
  },
  Heading: {
    height: 20,
    margin: 12,
    marginBottom: -10,
    fontWeight: 'bold',
  },
  AddPagesHeader: {
    height: 20,
    margin: 12,
    color: '#5F5DA6',
    fontWeight: 'bold',
  },
  AddPagesBorder: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    marginRight: 12,
    marginLeft: 12,
    marginTop: -5,
  },
  HeaderBorder: {
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
  },
  // Description: {
  //   height: 20,
  //   alignItems: 'center',
  //   color: '#C4C4C4',
  // },
  Title: {
    height: 20,
    margin:12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5DA6',
  },
  saveButton: {
    margin: 13,
    height: 35,
    marginTop: 25,
    backgroundColor: '#5F5DA6',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  }
});

