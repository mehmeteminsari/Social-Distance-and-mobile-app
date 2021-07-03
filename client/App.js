import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import store from './store';
import { Provider } from "react-redux";

export default function App() {

  const Stack = createStackNavigator();

  const myOptions = {
    title: 'Ana Sayfa',
    headerStyle: {
      backgroundColor: '#153452',
    },
    headerTintColor: '#fff',
  }
  
  

  return (

    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={myOptions} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ ...myOptions, title: 'Detaylar' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
