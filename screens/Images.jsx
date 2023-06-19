import React from 'react'
import { StyleSheet,Text, View, Dimensions, SafeAreaView, Pressable } from 'react-native';
import { NativeBaseProvider, ScrollView,Flex, Image, Container,Button } from 'native-base';
import DummyData from '../Static/DummyData'

const { width } = Dimensions.get('window').width;
const { height } = Dimensions.get('window').height;

const Images = ({navigation}) => {
  return (
    <View>
      <SafeAreaView style={{  height: height }}>
      <ScrollView style={styles.ScrollContainer}>
        {/* <View>
          <Flex flexDirection="row" flexWrap={'wrap'} gap={4} alignItems={'center'} justifyContent={'center'}>
              <Image source={require('../assets/ai.jpeg')} alt="Image" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/nesuko.jpeg')} alt="Image02" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/ai.jpeg')} alt="Image03" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/nesuko.jpeg')} alt="Image04" style={{ width: 100, height:100}}/>
          </Flex> 
        </View>

        <View>
          <Container style={styles.LookFlex} alignItems={'center'} justifyContent={'center'}>
              <Image source={require('../assets/ai.jpeg')} alt="Image" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/nesuko.jpeg')} alt="Image02" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/ai.jpeg')} alt="Image03" style={{ width: 100, height:100}}/>
              <Image source={require('../assets/nesuko.jpeg')} alt="Image04" style={{ width: 100, height:100}}/>
          </Container> 
        </View> */}

        <View style={{ flex:1, flexDirection:'row', flexWrap:'wrap', gap:4 }}>
        {
          DummyData.map((data, index)=>{
            return(
              <Pressable 
                key={index} 
                style={{ height:100, width:100, backgroundColor:'#FCFCFC', border:20, borderColor:'#FFFFFF', justifyContent:'center', alignItems:'center' }}
                onPress={()=>{ navigation.navigate('Info', data)}}
                >
                <Text>{data.Name}</Text> 
                <Text>{data.Position}</Text> 
              </Pressable>
            )
          }) 
        }
        </View>

        
        <Button onPress={() => navigation.navigate('Info')} style={{ margin:10, backgroundColor:'#000000', marginBottom:100 }}>To Info</Button>


      </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Images

const styles = StyleSheet.create({
    ScrollContainer:{
        height: height,
        width: width,
        padding:30,
      },
      LookFlex: {
        flex: 1,
        width: width,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:20,
        marginTop:20
      }
})