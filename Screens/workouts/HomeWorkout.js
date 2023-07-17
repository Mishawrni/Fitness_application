import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./HomeWorkouts/pushup.gif')}/>
      <Text style={styles.txt1}>Pushups</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/semisquatjump.gif')}/>
       <Text style={styles.txt1}>Semi Squat Jump</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/lungwithjump.jpg')}/>
       <Text style={styles.txt1}>Lunge With Jump</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/wallpushups.gif')}/>
       <Text style={styles.txt1}>Wall Pushups</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/lunge.gif')}/>
       <Text style={styles.txt1}>Launge</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/sidemove.gif')}/>
       <Text style={styles.txt1}>Side Move</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/standingcheststretch.gif')}/>
       <Text style={styles.txt1}>Standing Chest Stretch</Text>
        <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/glutebridgemarch.gif')}/>
       <Text style={styles.txt1}>Glute Bridge March</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/fronplankwithtwist.gif')}/>
       <Text style={styles.txt1}>Front Plank with Twist</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./HomeWorkouts/singlelegbridge.gif')}/>
       <Text style={styles.txt1}>Single Leg Bridge</Text>

  
      

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
