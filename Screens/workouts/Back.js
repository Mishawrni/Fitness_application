import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Back/BentOvergriprow.gif')}/>
      <Text style={styles.txt1}>Barbell Bentover Rowing</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Back/barbellreversebentover.gif')}/>
       <Text style={styles.txt1}>Barbell Reverse Bentover Rowing</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Back/dumbbellbentoverRowing.gif')}/>
       <Text style={styles.txt1}>Dumbbell BentOver Rowing</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Back/Latpulldown.gif')}/>
       <Text style={styles.txt1}>Latpull Down</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Back/barbellreversebentover.gif')}/>
       <Text style={styles.txt1}>Latpull Down Reverse</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Back/barbellbentrow.gif')}/>
       <Text style={styles.txt1}>Bentover Grip Rowing</Text>
      

  
      

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
