import React from "react";
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler";

import Modal from "react-native-modalbox";

const AddDeadline = () => {
  const [name, onChangeName] = React.useState(null);
  const [Remarks, onChangeRemarks] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={styles.ScrollView}>
      <View>
        <Text
          style={styles.Title}>
          Adding Deadline
        </Text>
      </View>

      <View style={styles.HeaderBorder}/>

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
        Category:
      </Text>
      <TouchableOpacity style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}}>
        <Text>  Select Category</Text>
      </TouchableOpacity>
      <Text
        style={styles.Heading}>
        Date:
      </Text>
      <TouchableOpacity style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}}>
        <Text>  Select Date</Text>
      </TouchableOpacity>
      <Text
        style={styles.Heading}>
        Reminder:
      </Text>
      <TouchableOpacity style={{height: 25, backgroundColor: '#C4C4C4', borderRadius: 5, margin: 11, justifyContent: 'center'}}>
        <Text>  Select Reminder</Text>
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
  // Description: {
  //   height: 20,
  //   alignItems: 'center',
  //   color: '#C4C4C4',
  // },
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

export default AddDeadline;