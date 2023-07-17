import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Chest/chest.gif')}/>
      <Text style={styles.txt1}>Barbell Bench Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/dumbellbench.gif')}/>
       <Text style={styles.txt1}>Dumbbell Bench Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/incline.gif')}/>
       <Text style={styles.txt1}>Incline Barbell Bench Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/inclinedumbell.gif')}/>
       <Text style={styles.txt1}>Incline Dumbbell Bench Press</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/barbelldick.gif')}/>
       <Text style={styles.txt1}>Barbell Dickline Press</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/dicklinedumbell.gif')}/>
       <Text style={styles.txt1}>Dumbbell Dickline Press</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/cabel.gif')}/>
       <Text style={styles.txt1}>Cabel Press</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Chest/flys.gif')}/>
       <Text style={styles.txt1}>Dumbbell Flys</Text>
      

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
