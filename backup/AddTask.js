import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Text, View, Button, Dimensions, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity } from "react-native-gesture-handler";

import Modal from "react-native-modalbox";

const AddTask = () => {
  const [name, onChangeName] = React.useState(null);
  const [Location, onChangeLocation] = React.useState(null);
  const [Remarks, onChangeRemarks] = React.useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={styles.ScrollView}>
      <View>
        <Text
          style={styles.Title}>
          Adding Task
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
});

export default AddTask;