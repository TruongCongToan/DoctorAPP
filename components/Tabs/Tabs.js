import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import NotifyScreen from "../../screens/NotifyScreen";
import ScheduleScreen from "../../screens/SchedulesScreen/SchedulesScreen";
import CommunityScreen from "../../screens/CommunityScreen";

import HomeLogo from "../../assets/image/house.png";
import Toast from "react-native-toast-message";

const Tabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#ffffff",
            borderRadius: 15,
            height: 90,
            shadowColor: "black",
          },
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <>              
              <View style = {{alignItems:'center',justifyContent:'center',top:10}}>
                <Image
                  source={require("../../assets/image/homeB.png")}
                  style={{
                    width: 30,
                    height: 30,
                    tintColor: focused ? "black" : "gray",
                  }}
                  resizeMode="stretch"
                />
                <Text style = {{color: focused ? 'black':'gray',fontSize:12}}>Trang chủ</Text>
              </View>
              </>
            ),
          }}
        />
        <Tab.Screen 
        name="Notify" 
        component={NotifyScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <>              
            <View style = {{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
                source={require("../../assets/image/notification.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "black" : "gray",
                }}
                resizeMode="stretch"
              />
              <Text style = {{color: focused ? 'black':'gray',fontSize:12}}>Thông báo</Text>
            </View>
            </>
          ),
        }}
        />
        <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <>              
            <View style = {{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
                source={require("../../assets/image/calendar.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "black" : "gray",
                }}
                resizeMode="stretch"
              />
              <Text style = {{color: focused ? 'black':'gray',fontSize:12}}>Lịch hẹn</Text>
            </View>
            </>
          ),
        }}
        />
        <Tab.Screen 
        name="Community" 
        component={CommunityScreen} 
        options={{
          tabBarIcon: ({ focused }) => (
            <>              
            <View style = {{alignItems:'center',justifyContent:'center',top:10}}>
              <Image
                source={require("../../assets/image/group-users.png")}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "black" : "gray",
                }}
                resizeMode="stretch"
              />
              <Text style = {{color: focused ? 'black':'gray',fontSize:12}}>Cộng đồng</Text>
            </View>
            </>
          ),
        }}
        />
      </Tab.Navigator>
      <Toast />
    </>
  );
};
const styles = StyleSheet.create({});

export default Tabs;
