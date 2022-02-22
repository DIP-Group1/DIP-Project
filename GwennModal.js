import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { React } from 'react';

import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import Modal from "react-native-modalbox";
import { ScrollView} from 'react-native-gesture-handler';

const {width, height } = Dimensions.get("window");

export default function GwennModal() {
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
  // console.log(categoryList.length);
  
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
        propagateSwipe={true}
        onClosed={() => setModalReminderVisible(false)}
        ScrollViewProps={true}
        onPress={() => setModalReminderVisible(false)}
      >
        <ScrollView contentContainerstyle={styles.modalScroll}> 
            {ListReminders}
            <TouchableOpacity style={styles.closeButtonStyle} onPress={() => setModalReminderVisible(false)}>
              <Text style={{ color: '#6568A6'}}>x Close</Text>
            </TouchableOpacity> 
        </ScrollView>
          
      </Modal>
    );
};

  return (
      <View style={styles.container}>
        
        <Button title="Choose Category!" onPress={() => setModalCategoryVisible(true)} />
        {getModalCategory()}
        <Text>Category: {category}</Text>
        <Button title="Choose Reminder!" onPress={() => setModalReminderVisible(true)} />
        <Text>Reminder: {reminder}</Text>
        {getModalReminder()}
      </View>


  );
}

const styles = StyleSheet.create({
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
    padding: 10
  },
  closeButtonStyle:{
    alignItems: 'flex-start',
    color: '#6568A6',
    fontSize: 16,
    //fontWeight: "bold",
    padding: 10
  }

});