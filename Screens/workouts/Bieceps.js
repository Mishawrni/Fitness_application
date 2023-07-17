import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./Bieceps/barbellcurl.gif')}/>
      <Text style={styles.txt1}>Barbell Curl</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/dumbbellcurl.gif')}/>
       <Text style={styles.txt1}>Dumbbell Curl</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/zbarcurl.gif')}/>
       <Text style={styles.txt1}>Z-Bar Curl</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/inclinedumbbellcurl.gif')}/>
       <Text style={styles.txt1}>Dumbbell Incline Curl</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/preachercurl.gif')}/>
       <Text style={styles.txt1}>Barbell Preacher Curl</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/dumbbellpreachercurl.gif')}/>
       <Text style={styles.txt1}>Dumbbell Preacher Curl</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/cabelcurl.gif')}/>
       <Text style={styles.txt1}>Cabel Curl</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/BarbellReversecurl.gif')}/>
       <Text style={styles.txt1}>Barbell Reverse Curl</Text>
       <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./Bieceps/barbellwistcurl.gif')}/>
       <Text style={styles.txt1}>Barbell Wist Curl</Text>
      

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
