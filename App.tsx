import "react-native-gesture-handler"

import { StatusBar } from "react-native"
import { Feather } from "@expo/vector-icons"
import { HoldMenuProvider } from "react-native-hold-menu"

import { Home } from "./src/screens/Home"

export default function App() {
  return (
    <HoldMenuProvider
      theme="dark"
      iconComponent={Feather}
      safeAreaInsets={{ bottom: 0, left: 0, right: 0, top: 0 }}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </HoldMenuProvider>
  )
}
