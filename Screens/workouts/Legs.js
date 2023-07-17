import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Legs/fullsquat.gif')}/>
      <Text style={styles.txt1}>Barbell Full Squat</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/legpress.gif')}/>
       <Text style={styles.txt1}>Leg Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/sumoSquat.gif')}/>
       <Text style={styles.txt1}>Dumbbell Sumo Squat</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/legextention.gif')}/>
       <Text style={styles.txt1}>Leg Extention</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/legcurl.gif')}/>
       <Text style={styles.txt1}>Leg Curl</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/deadlift.gif')}/>
       <Text style={styles.txt1}>Deadlift</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/barbellcalf.gif')}/>
       <Text style={styles.txt1}>Barbell Calfrise</Text>
        <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Legs/dumbbellcalf.gif')}/>
       <Text style={styles.txt1}>Dumbbell Calfrise</Text>

  
      

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
