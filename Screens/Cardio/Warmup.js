import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./warmup/inclinetreadmill.gif')}/>
      <Text style={styles.txt1}>Incline Treadmill</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./warmup/legstreach.jpg')}/>
       <Text style={styles.txt1}>Legs Stratching</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./warmup/runontreadmill.gif')}/>
       <Text style={styles.txt1}>Run on Treadmill</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./warmup/scorpionStretch.gif')}/>
       <Text style={styles.txt1}>Scorpion Streatching</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./warmup/seatedcalfstretch.gif')}/>
       <Text style={styles.txt1}>Seated  Streatching</Text>
      
      

      </ScrollView>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  txt1:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'

  }
})


export default App;
