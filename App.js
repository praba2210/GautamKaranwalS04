import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View, Dimensions, SafeAreaView } from 'react-native';
import { NativeBaseProvider, ScrollView,Flex, Image, Container } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Images from './screens/Images';
import Info from './screens/Info';

const { width } = Dimensions.get('window').width;
const { height } = Dimensions.get('window').height;

export default function App() {

  const Stack = createNativeStackNavigator();

  const NavigationStack = () => {
    return (
      <Stack.Navigator initialRouteName='Images'>
        <Stack.Screen name={'Images'} component={Images} options={{ headerShown:false }}/>
        <Stack.Screen name={'Info'} component={Info} options={{ headerShown:false }}/>
      </Stack.Navigator>
    )
  }

  return (
   <NativeBaseProvider>
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
   </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({

})