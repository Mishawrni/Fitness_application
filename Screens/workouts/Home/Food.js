import React from 'react';
import { View, Image, StyleSheet,ScrollView,Text } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,marginTop:20,borderRadius:20}} source={require('./images.jpg')}/>
      <Text style={styles.txt1}>Chicken Breast</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./beef.jpg')}/>
       <Text style={styles.txt1}>Beef Meat</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./egg.jpg')}/>
       <Text style={styles.txt1}>Egg</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./tuna.jpg')}/>
       <Text style={styles.txt1}>Tuna Fish Meat</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./penut.jpg')}/>
       <Text style={styles.txt1}>Penuts</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./redCowpea.png')}/>
       <Text style={styles.txt1}>Red Cowpea</Text>
      <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./greenGram.jpg')}/>
       <Text style={styles.txt1}>Green Gram</Text>
        <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./vegitables.jpg')}/>
       <Text style={styles.txt1}>vegetables</Text>
        <Image style={{height:200,width:300,alignItems:'center',marginVertical:20,borderRadius:20}} source={require('./fruits.jpg')}/>
       <Text style={styles.txt1}>Fruits</Text>

      </ScrollView>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1:{
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold'

  }
})


export default App;
