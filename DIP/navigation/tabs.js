import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import TimetableScreen from '../screens/TimetableScreen'
import GameScreen from '../screens/GameScreen'
import HabitsScreen from '../screens/HabitsScreen'
import MeScreen from '../screens/MeScreen'
import PlusScreen from '../screens/PlusScreen'


const Tab = createBottomTabNavigator();

const PlusButton = ({children,onPress}) => (
    <TouchableOpacity
        style={{
            top: -20,
            justifyContent:'center',
            alignItems:'center',

        }}
        onPress={onPress}
    >
        <View
            style={{
                width:40,
                height:40,
                borderRadius:35,
                backgroundColor: '#ffffff'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = () => {
    return(
        <Tab.Navigator
            screenOptions={{
                "tabBarShowLabel": false,
                headerShown: true,
            }}
        >
            <Tab.Screen name = "My Calendar" component={TimetableScreen} options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/timetable.png')}
                                resizeMode='contain'
                                style={{
                                    width:45,
                                    height:25,
                                    // tintColor: '#a9c7c8'
                                }}
                            />
                            <Text
                                style={{color:'#a9c7c8', fontSize:12}}>
                                Timetable
                            </Text>
                        </View>
                    )
                }}
            />
            <Tab.Screen name = "My Progress" component={GameScreen}options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/game.png')}
                                resizeMode='contain'
                                style={{
                                    width:65,
                                    height:25,
                                    // tintColor: '#a9c7c8'
                                }}
                            />
                            <Text
                                style={{color:'#a9c7c8', fontSize:12}}>
                                Game
                            </Text>
                        </View>
                    )
                }}/>
            <Tab.Screen name='Add' component={PlusScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/plus.png')}
                            resizeMode='contain'
                            style={{
                                width:80,
                                height:80,
                                // tintColor:'#ffffff',
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <PlusButton {...props} />
                    )
                }}
            />
            <Tab.Screen name = "My Daily Motivation" component={HabitsScreen}options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/habits.png')}
                                resizeMode='contain'
                                style={{
                                    width:60,
                                    height:25,
                                    // tintColor: '#a9c7c8'
                                }}
                            />
                            <Text
                                style={{color:'#a9c7c8', fontSize:12}}>
                                Motivation
                            </Text>
                        </View>
                    )
                }}/>
            <Tab.Screen name = "My Profile" component={MeScreen}options=
                {{
                    tabBarIcon:({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Image
                                source={require('../assets/me.png')}
                                resizeMode='contain'
                                style={{
                                    width:45,
                                    height:25,
                                    // tintColor: '#a9c7c8'
                                }}
                            />
                            <Text
                                style={{color:'#a9c7c8', fontSize:12}}>
                                Me
                            </Text>
                        </View>
                    )
                }}/>
        </Tab.Navigator>
    )
}
export default Tabs