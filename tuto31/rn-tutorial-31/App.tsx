import { useColorScheme, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Chip, FAB, MD3DarkTheme, MD3LightTheme, PaperProvider, Text } from 'react-native-paper'
import Textos from 'components/screens/Textos'
import { TemaClaro } from 'themes/TemaClaro'

export default function App() {
  const modoActivo = useColorScheme()
  const [fabAbierto, setFabAbierto] = useState(false)

  function fabPulsado(){
    console.log("eh velda que el ingles able pueltas")
  }

  useEffect(fabPulsado, [fabAbierto])
  
  return (
    <PaperProvider theme={modoActivo === "light" ? TemaClaro : MD3DarkTheme}>
      <Button icon={"camera"} onPress={ () => console.log("tu putamae")}>boton1</Button>
      <Textos/>
            <Button mode='contained' icon={"camera"} onPress={ () => console.log("tu putamae")}>boton1</Button>
      <Chip onPress={() => console.log("Abierto")} onClose={() => console.log("cerrado")}>algochip</Chip>
      <FAB.Group 
        open = {fabAbierto}
        icon = {"plus"}
        visible = {true}
        onStateChange={ () => setFabAbierto(!fabAbierto)}
        actions={[
          {icon:"camera", label:"camara", onPress: () => console.log("waos")},
          {icon:"camera", label:"camara", onPress: () => console.log("waos")},
          {icon:"camera", label:"camara", onPress: () => console.log("waos")}
        ]}
      />
    </PaperProvider>
  )
}
