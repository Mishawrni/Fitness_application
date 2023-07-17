import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Shoulder/FrontPress.gif')}/>
      <Text style={styles.txt1}>Barbell Front Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/dumbellfrontpress.gif')}/>
       <Text style={styles.txt1}>Dumbbell Front Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/ArnoldPress.gif')}/>
       <Text style={styles.txt1}>Dumbbell Arnold Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/backbehindneckpress.gif')}/>
       <Text style={styles.txt1}>Barbell Back Behind Neck Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/dumbellfrontrise.gif')}/>
       <Text style={styles.txt1}>Dumbbell Front Rise</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/cabelfrontrise.gif')}/>
       <Text style={styles.txt1}>Cabel Front Rise</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/dumbellLateral.gif')}/>
       <Text style={styles.txt1}>Dumbbell Lateral Press</Text>
        <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Shoulder/uprightrowing.gif')}/>
       <Text style={styles.txt1}>UpRigt Rowing</Text>

  
      

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
