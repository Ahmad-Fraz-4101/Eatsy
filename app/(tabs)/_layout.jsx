import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'

import {icons} from '../../constants';

const Tabicon =({icon,color,name,focused})=>{
  return (
    <View className="items-center justify-center gap-1">
      <Image    
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold':'font-pregular'} text-xs`} 
      style={{color:color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
   <>
   <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveBackgroundColor:'#CDCDE0',
        tabBarStyle:{
          backgroundColor:'#161622',
          borderTopWidth:1,
          borderTopColor:'#232533',
          height:84,
        }
      }}
   >
 
 <Tabs.Screen 
    name="Feed"
    options={{
      title:'Feed',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.feed}
        color={color}
        name="Feed"
        focused={focused}
        />
      )

    }}
    />


<Tabs.Screen 
    name="trackCust"
    options={{
      title:'Track',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.delivery}
        color={color}
        name="Track"
        focused={focused}
        />
      )

    }}
    />

    <Tabs.Screen 
    name="home"
    options={{
      title:'Home',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.home}
        color={color}
        name="Home"
        focused={focused}
        />
      )

    }}
    />






<Tabs.Screen 
    name="profile"
    options={{
      title:'Profile',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.profile}
        color={color}
        name="Profile"
        focused={focused}
        />
      )

    }}
    />


<Tabs.Screen 
    name="chatbot"
    options={{
      title:'Foodgpt',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.bot}
        color={color}
        name="FoodGpt"
        focused={focused}
        />
      )

    }}
    />


   </Tabs>
   </>
  )
}

export default TabsLayout