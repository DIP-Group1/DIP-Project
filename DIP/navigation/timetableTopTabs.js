import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import CalendarSubScreen from '../screens/CalendarSubScreen';
import TasksSubScreen from '../screens/TasksSubScreen';
import TodaySubScreen from '../screens/TodaySubScreen';


const Tab = createMaterialTopTabNavigator();

const timetableTopTabs = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
            }}
        >
            <Tab.Screen name = "Calendar" component={CalendarSubScreen} options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{allignItens: 'center', justifyContent: 'center'}}>
                            <Text
                                style={{color:'#A2A4A7', fontSize:12}}>
                                Timetable
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name = "Tasks" component={TasksSubScreen}options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{allignItens: 'center', justifyContent: 'center'}}>
                            <Text
                                style={{color:'#A2A4A7', fontSize:12}}>
                                Tasks
                            </Text>
                        </View>
                    )
                }}/>
            <Tab.Screen name = "Today" component={TodaySubScreen}options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{allignItens: 'center', justifyContent: 'center'}}>
                            <Text
                                style={{color:'#A2A4A7', fontSize:12}}>
                                Today
                            </Text>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}
export default timetableTopTabs