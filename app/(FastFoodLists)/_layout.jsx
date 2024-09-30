import { View, Text,Image } from 'react-native'
import React from 'react'
import {Tabs,Redirect} from 'expo-router'
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
    name="burgers"
    options={{
      title:'Burgers',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.burger}
        color={color}
        name="Burgers"
        focused={focused}
        />
      )

    }}
    />


<Tabs.Screen 
    name="pizzas"
    options={{
      title:'Pizza',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.pizza}
        color={color}
        name="Pizza"
        focused={focused}
        />
      )

    }}
    />

    <Tabs.Screen 
    name="appetizers"
    options={{
      title:'Appetizers',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.appetizer}
        color={color}
        name="Appetizers"
        focused={focused}
        />
      )

    }}
    />


<Tabs.Screen 
    name="FastFoodDeals"
    options={{
      title:'deals',
      headerShown:false,
      tabBarIcon: ({color,focused})=>(
        <Tabicon
        icon={icons.deals}
        color={color}
        name="deals"
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