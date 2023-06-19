import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Button } from 'native-base'

const { width } = Dimensions.get('window').width;
const { height } = Dimensions.get('window').height;

const Info = ({route, navigation}) => {
  const data = route.params
  console.log(data)
  return (
    <View style={styles.container}>
      <Text>Welcome {data.Name},</Text>
      <Text>I see you are a {data.Position}</Text>
      <Button onPress={() => {navigation.navigate('Images')}} style={{ backgroundColor:'#000000' }}>To Images</Button>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({
  container:{
    margin:20,
    height: height,
    width: width,
    paddingTop:20,
    flex:1,
    flexDirection: 'column',
    gap:20
  }
})