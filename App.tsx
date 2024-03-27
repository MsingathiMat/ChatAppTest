import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AButton, BarcodeScanner, GenerateRandomDigits, Showroom } from 'aphrica';
import Scanner from './Screens/Scanner';
import Detail from './Screens/Detail';
import HomeScreen from './Screens/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppProvider } from './Store/AppContext';









const Stack = createNativeStackNavigator();

function App() {
  return (
  
    <NavigationContainer>
       <AppProvider>
      <Stack.Navigator initialRouteName='Home' screenOptions={{}}>
    
        <Stack.Screen name="Home" component={HomeScreen} options={{
headerShown:false
        }} />
        <Stack.Screen name="Scanner" component={Scanner}  options={{headerShown:false}}/>
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
      </AppProvider>
    </NavigationContainer>
   
  );
}

export default App