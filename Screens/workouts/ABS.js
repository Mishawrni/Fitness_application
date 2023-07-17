import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./ABS/plank.gif')}/>
      <Text style={styles.txt1}>Plank</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/byicyclecrunch.gif')}/>
       <Text style={styles.txt1}>Bicycle Crunch</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/elbowtoknee.gif')}/>
       <Text style={styles.txt1}>Elbow to Knee</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/lyinglesrise.gif')}/>
       <Text style={styles.txt1}>Lying Lesrise</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/mountainclimbers.gif')}/>
       <Text style={styles.txt1}>Mountain Climbers</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/reverscrunchers.gif')}/>
       <Text style={styles.txt1}>Reverse Crunchers</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/Scissorkicks.gif')}/>
       <Text style={styles.txt1}>Scissor Kicks</Text>
        <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./ABS/sideplank.gif')}/>
       <Text style={styles.txt1}>Side Plank</Text>
       

  
      

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
