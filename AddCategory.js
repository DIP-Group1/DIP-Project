import React from "react";
import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

import Modal from "react-native-modalbox";

import AddEvent from './AddEvent';
import AddDeadline from './AddDeadline';
import AddTask from './AddTask';

function AddCategory( {navigation} ) {
  const [name, onChangeName] = React.useState(null);
  const [AddInfo, onChangeInfo] = React.useState(null);

  
  const categoryList = ["Category1", "Category2", "Category3"];
  const reminderList = ["No Reminder",
    "At time of event",
    "5 minutes before",
    "15 minutes before",
    "30 minutes before",
    "45 minutes before",
    "1 hour before",
    "2 hours before",
    "1 day before",
    "2 days before",
    "3 days before",
    "4 days before", 
    "5 days before",
    "1 week before"
  ]
  const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
  const [modalReminderVisible, setModalReminderVisible] = useState(false);
  const [category, setCategory] = useState("");
  const [reminder, setReminder] = useState("");

  let ListCategory=categoryList.map((item,index)=>{
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => {setCategory(item);setModalCategoryVisible(false)}}>
      <Text style={{ fontSize: 14 }}>{item}</Text>
   </TouchableOpacity>
  })

  let ListReminders=reminderList.map((item,index)=>{
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => {setReminder(item); setModalReminderVisible(false)}}>
        <Image
          source={require('./assets/alarm.png')} style={{width: 15, height: 15}} 
          // style={styles.ImageIconStyle}
          />
        <Text style={{ marginLeft:10, fontSize: 14 }}>{item}</Text>
      </TouchableOpacity> 
  })

  const getModalCategory = () =>{
    return (
      
      <Modal
        entry="bottom"
        backdropPressToClose={true}
        isOpen={modalCategoryVisible}
        style={styles.modalBox}
        onClosed={() => setModalCategoryVisible(false)}
      >
        <View style={styles.content}>            
          {ListCategory}
          <Button title='x Close' color={'#6568A6'} onPress={() => setModalCategoryVisible(false)} />
        </View>
      </Modal>
    );
};

const getModalReminder = () =>{
  return (
    <Modal
      entry="bottom"
      backdropPressToClose={true}
      isOpen={modalReminderVisible}
      style={styles.modalBox}
      // propagateSwipe={true}
      onClosed={() => setModalReminderVisible(false)}
      // ScrollViewProps={true}
      onPress={() => setModalReminderVisible(false)}
    >
      <ScrollView style={styles.modalScroll}> 
          {ListReminders}
          <TouchableOpacity style={styles.closeButtonStyle} onPress={() => setModalReminderVisible(false)}>
            <Text style={{ color: '#6568A6'}}>x Close</Text>
          </TouchableOpacity> 
      </ScrollView>
        
    </Modal>
  );
};

  return (

    <SafeAreaView>
      <View>
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
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  modalBox: {
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "transparent"
  },
  modalScroll:{
    marginTop: 500,
    overflow: "hidden",
    textAlign: "left",
    alignItems:"flex-start",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingLeft:15,
    paddingBottom:15,
    flex: 1,
    height: 100,
    backgroundColor: "white"
  },
  content: {
    position: "absolute",
    bottom: 0,
    // height: verticalScale(250),
    height: 200,
    borderTopLeftRadius: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 15,
    borderTopRightRadius: 15,
    backgroundColor: "white"
  },
  textStyle: {
    fontSize: 22
  },
  buttonStyle:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    color: '#000',
    fontSize: 20,
    //fontWeight: "bold",
    padding: 10
  },
  closeButtonStyle:{
    alignItems: 'flex-start',
    color: '#6568A6',
    fontSize: 16,
    //fontWeight: "bold",
    padding: 10,
  }
});
