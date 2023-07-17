import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Alert,TouchableOpacity,Button,Image} from 'react-native';



const Start = ({ navigation }) => {
  return(
  <View style={{
    flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'black',
  }}>
  <Image style={{width:200,height:200,position:'absolute',paddingTop:-300,}} source={require('../assets/Start/Logo1.png')}/>

  <Text style={{
    fontsize:40
  }}>      </Text>

<TouchableOpacity 
    style={styles.buttonContainer}
    onPress={()=> navigation.navigate("Login")}>
    <Text style={styles.buttonText}>Get Started</Text>
    

    <TouchableOpacity onPress={()=> navigation.navigate("Start1")}>
  
    </TouchableOpacity>
 
     </TouchableOpacity>


  </View>
)
};
const styles=StyleSheet.create({
  buttonContainer:{
    backgroundColor:'white',
    
    paddingVertical:1,
    borderRadius:50,
    width:300,
    height:50,
    textAlign:'center',
    marginTop:380
  },
  buttonText:{
     textAlign:'center',
     color:'#A1A2A3 ',
     fontWeight:'bold',
     marginTop:15

     
  }

})

export default Start;