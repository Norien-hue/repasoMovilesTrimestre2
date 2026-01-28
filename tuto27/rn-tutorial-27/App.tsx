import "./global.css"
import { View, Text } from 'react-native'
import React from 'react'
import clsx from "clsx"
import { SafeAreaView } from "react-native-safe-area-context"
import Toolbar from "components/Toolbar"

export default function App() {
  const aleatorio = Math.floor(4*Math.random())

  const colorAleatorio = {
    "color-blue-100" : aleatorio === 0,
    "color-red-100" : aleatorio === 1,
    "color-indigo-100" : aleatorio === 2
  }

  return (
    <SafeAreaView className="flex-1"  >
      <Toolbar/>
      <View className="flex-1 bg-blue-200 justify-center items-center">
        <Text className={clsx("color-indigo-500", styles.texto)}>App</Text>
        <Text className={clsx(`${"text-3xl"} font-bold mt-3`, "color-[#FFA07A]", colorAleatorio)}>App</Text>
        <Text>Hola</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = {
    texto: "text-3xl font-bold"
  }