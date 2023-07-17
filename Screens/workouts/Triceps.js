import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Triceps/barbelloverhead.gif')}/>
      <Text style={styles.txt1}>Barbell Standing Tricep Extention</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/dumbbellstanding.gif')}/>
       <Text style={styles.txt1}>Dumbbell Standing Tricep Extention</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/closegrip.gif')}/>
       <Text style={styles.txt1}>Close Grip Tricep Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/dumbbelllying.gif')}/>
       <Text style={styles.txt1}>Dumbbell Lying Tricep Extention</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/barbelllying.gif')}/>
       <Text style={styles.txt1}>Barbell Lying Tricep Extention</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/cabeloverhead.gif')}/>
       <Text style={styles.txt1}>Cabel Overhead Tricep Extention</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Triceps/TricepPush.gif')}/>
       <Text style={styles.txt1}>Cabel Tricep Push Down</Text>

  
      

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
