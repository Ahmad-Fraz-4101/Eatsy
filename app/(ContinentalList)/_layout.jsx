import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ContinentalLayout = () => {
  return (
    <Stack>
    <Stack.Screen name="pasta" options={{headerShown:false}} />
      <Stack.Screen name="steaks" options={{headerShown:false}} />
      <Stack.Screen name="fish" options={{headerShown:false}} />
      <Stack.Screen name="dessert" options={{headerShown:false}} />
  </Stack>
  )
}

export default ContinentalLayout