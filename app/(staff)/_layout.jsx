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

const StaffLayout = () => {
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
    name="feed"
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
    name="Reservations"
    options={{
      title:'Reservations',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.table}
        color={color}
        name="Reservations"
        focused={focused}
        />
      )

    }}
    />




<Tabs.Screen 
    name="StaffOrders"
    options={{
      title:'Orders',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.order}
        color={color}
        name="Orders"
        focused={focused}
        />
      )

    }}
    />


<Tabs.Screen 
    name="Manage"
    options={{
      title:'Manage',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.manage}
        color={color}
        name="Manage"
        focused={focused}
        />
      )

    }}
    />


   </Tabs>
   </>
  )
}

export default StaffLayout