import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,marginTop:10,borderRadius:20}} source={require('./whey.jpg')}/>
      <Text style={styles.txt1}>WHEY Protein</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./mass.jpg')}/>
       <Text style={styles.txt1}>MAAS Protein</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./amaino.jpg')}/>
       <Text style={styles.txt1}>Amino Tablet</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./fishoil.png')}/>
       <Text style={styles.txt1}>Fish Oil</Text>
      <Image style={{height:300,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./c4.jpg')}/>
       <Text style={styles.txt1}>Pre-workout Drink</Text>
      

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
