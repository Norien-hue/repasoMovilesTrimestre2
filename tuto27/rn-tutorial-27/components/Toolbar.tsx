import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from '@react-native-vector-icons/material-icons'

export default function Toolbar() {
  return (
    <View className='w-full h-14 flex-row items-center sm:bg-red-700 justify-between px-4 lg:h-70 sm:h-10 lg:bg-blue-700'>
      <View className='flex-row items-center gap-3'>
        <MaterialIcons name={"style"} size={24} color={"white"}/>
        <Text className='font-bold text-2xl color-white'>Tuto nativewind</Text>
      </View>
      <View className='flex-row items-center gap-3'>
        <MaterialIcons name={"style"} size={24} color={"white"}/>
        <MaterialIcons name={"style"} size={24} color={"white"}/>
        <MaterialIcons name={"style"} size={24} color={"white"}/>
      </View>
    </View>
  )
}