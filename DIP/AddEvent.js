import { StatusBar } from 'expo-status-bar';
import React from "react";
import { useState } from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button,
   Dimensions, Image, Platform, Date } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import DateTimePicker from '@react-native-community/datetimepicker';

import Modal from "react-native-modalbox";

const AddEvent = () => {
  const [name, onChangeName] = React.useState(null); 
  const [AddInfo, onChangeInfo] = React.useState(null);
  const [Location, onChangeLocation] = React.useState(null);
  const [Date, onChangeDate] = React.useState(null);
  const [Category, onChangeCategory] = React.useState(null);
  const [Reminder, onChangeReminder] = React.useState(null);
  const [Remarks, onChangeRemarks] = React.useState(null);

  
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
    return <TouchableOpacity style={styles.buttonStyle} onPress={() => { setCategory(item);setModalCategoryVisible(false); console.log({item})}}> 
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
        // onPress={() => setModalCategoryVisible(false)}
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
      propagateSwipe={true}
      onClosed={() => setModalReminderVisible(false)}
      ScrollViewProps={true}
      onPress={() => setModalReminderVisible(false)}
    >
      <View style={{flex:1}}>
        <ScrollView style={styles.modalScroll}> 
          {ListReminders}
          <TouchableOpacity style={styles.closeButtonStyle} onPress={() => setModalReminderVisible(false)}>
            <Text style={{ color: '#6568A6'}}>x Close</Text>
          </TouchableOpacity> 
        </ScrollView>
      </View>
        
    </Modal>
  );
};



  return (
    <View style={{flex:1}}>
      <SafeAreaView>
        <ScrollView nestedScrollEnabled style={styles.scrollView}>
        <View>
          <Text
            style={styles.Title}>
            Adding Event
          </Text>
        </View>
        <View style={styles.HeaderBorder}/>

        <Text
          style={styles.Heading}>
          Name
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
          Location:
        </Text>
        <TextInput
          style={styles.Input}
          onChangeText={onChangeLocation}
          value={Location}
          placeholder="e.g. Hive"
          keyboardType="default"
        />
        <Text
          style={styles.Heading}>
          Date:
        </Text>
        <TouchableOpacity style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 13, justifyContent: 'center'}}>
          <Text>  Select Date</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginLeft: 13}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{marginTop: 10, width: '50%', fontWeight: 'bold', height: 20}}>From:</Text>
            <Text style={{marginTop: 10, width: '50%', fontWeight: 'bold', height: 20}}>To:</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginLeft: 13, marginRight: 13}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style={{width: 170, height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, marginRight: 17, marginBottom: 10, justifyContent: 'center'}}>
              <Text>  Start Time</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: 170, height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, marginRight: 1, marginBottom: 10, justifyContent: 'center'}}>
              <Text>  End Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={styles.Heading}>
          Category:
        </Text>

          <TouchableOpacity 
          style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}} 
          onPress={() => setModalCategoryVisible(true)}>
            {category==''?<Text>  Select Category</Text>:<Text>  {category}</Text>}
          </TouchableOpacity>
          {/* {getModalCategory()} */}

        <Text
          style={styles.Heading}>
          Reminder:
        </Text>
        <TouchableOpacity 
        style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}}
        onPress={() => setModalReminderVisible(true)}>
          {reminder==''?<Text>  Select Reminder</Text>:<Text>  {reminder}</Text>}
        </TouchableOpacity>
      

        <Text
          style={styles.Heading}>
          Remarks:
        </Text>
        <TextInput
          style={styles.longInput}
          onChangeText={onChangeRemarks}
          value={Remarks}
          placeholder="Details (e.g. items to bring along)"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
       {getModalCategory()}
       {getModalReminder()}
    </View>
   
  );
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
  longInput: {
    height: 100,
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
  Title: {
    height: 30,
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5F5DA6',
  },
  saveButton: {
    margin: 13,
    height: 35,
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
    backgroundColor: "transparent",
  },
  modalScroll:{
    marginTop: 300,
    overflow: "hidden",
    textAlign: "left",
    // alignItems:"center",
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingLeft:15,
    paddingBottom:15,
    flex: 1,
    height: 'auto',
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
    padding: 10,
    minWidth: '100%'
  },
  closeButtonStyle:{
    alignItems: 'flex-start',
    color: '#6568A6',
    fontSize: 16,
    //fontWeight: "bold",
    padding: 10,
  },
});

export default AddEvent;