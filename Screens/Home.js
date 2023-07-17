import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



// Home screen component
const HomeScreen = ({navigation}) => {
  function navi(){
    navigation.navigate('Food');
    
  }
  return(
      <View style={styles.container}>
   <ScrollView>
   <TouchableOpacity
   onPress={() => navi()}><Image style={styles.img1} source={require('../assets/Home/healthy-food.jpg')}/></TouchableOpacity>
   <View style={styles.view1}><Text style={styles.text1}>Healthy Eat Healthy Heart</Text></View>
   <TouchableOpacity
   onPress={()=>{navigation.navigate('Nutration')}}
   ><Image style={styles.img1} source={require('../assets/Home/Supplement.jpeg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:410}}><Text style={styles.text1}>Nutriational Supplement</Text></View>
   
   <TouchableOpacity
   onPress={()=>{navigation.navigate("Track")}}>
   <Image style={styles.img1} source={require('../assets/Home/Track.png')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:656}}><Text style={styles.text1}>Track Your Goal</Text></View>
   </ScrollView>
  </View>
  );

};

// Workouts screen component
const WorkoutsScreen = ({navigation}) => (
  <View style={styles.container}>
   <ScrollView>
   <TouchableOpacity
   onPress={()=>{navigation.navigate('Chest')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/chest.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:175}}><Text style={styles.text1}>Chest Workouts</Text></View>


   <TouchableOpacity
   onPress={()=>{navigation.navigate('Bieceps')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/bicepes.jpg')}/></TouchableOpacity>
    <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:410}}><Text style={styles.text1}>Biecep Workouts</Text></View>


   <TouchableOpacity
   onPress={()=>{navigation.navigate('Triceps')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/tricepes.jpg')}/></TouchableOpacity>
    <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:650}}><Text style={styles.text1}>Tricep Workouts</Text></View>

   <TouchableOpacity
    onPress={()=>{navigation.navigate('Legs')}}
   
   
   ><Image style={styles.img1} source={require('../assets/Workouts/legs.jpg')}/></TouchableOpacity>
    <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:895}}><Text style={styles.text1}>Leg Workouts</Text></View>

   <TouchableOpacity
    onPress={()=>{navigation.navigate('Shoulder')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/Shoulder.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:1135}}><Text style={styles.text1}>Shoulder Workouts</Text></View>

   <TouchableOpacity
    onPress={()=>{navigation.navigate('Back')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/back.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:1370}}><Text style={styles.text1}>Back Workouts</Text></View>
   <TouchableOpacity
   onPress={()=>{navigation.navigate('HomeWorkout')}}
   
   ><Image style={styles.img1} source={require('../assets/Workouts/workout.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:1610}}><Text style={styles.text1}>Home Workouts</Text></View>
   <TouchableOpacity
   onPress={()=>{navigation.navigate('ABS')}}
   >
   
   <Image style={styles.img1} source={require('../assets/Workouts/ABS.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:1850}}><Text style={styles.text1}>ABS Workouts</Text></View>
   </ScrollView>
  </View>
);

// Cardio screen component
const CardioScreen = ({navigation}) => (
  <View style={styles.container}>
   <ScrollView>
   <TouchableOpacity
   onPress={()=>{navigation.navigate('Fatburn')}}
   ><Image style={styles.img1} source={require('../assets/Cardio/fatBurn.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:175}}><Text style={styles.text1}>Fat Burning Workouts</Text></View>
  
   <TouchableOpacity
    onPress={()=>{navigation.navigate('Warmup')}}
   
   ><Image style={styles.img1} source={require('../assets/Cardio/warmup.jpg')}/></TouchableOpacity>
   <View style={{backgroundColor:'#FFDD3C',
    height:50,
    width:350,borderBottomEndRadius:50,position:'absolute',marginTop:410}}><Text style={styles.text1}>Warmup Exersices</Text></View>
   </ScrollView>
  </View>
);

// Profile screen component
const ProfileScreen = () => (
  <View style={styles.container}>
    <Image style={{height:100,width:100,marginBottom:400}} source={require('../assets/Profile/user(1).png')}/>
  </View>
);

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === 'Home') {
              icon = focused ? require('../assets/Icons/home.png') : require('../assets/Icons/home.png');
            } else if (route.name === 'Workouts') {
              icon = focused ? require('../assets/Icons/report.png') : require('../assets/Icons/report.png');
            } else if (route.name === 'Cardio') {
              icon = focused ? require('../assets/Icons/heart-beat.png') : require('../assets/Icons/heart-beat.png');
            } else if (route.name === 'Profile') {
              icon = focused ? require('../assets/Icons/user.png') : require('../assets/Icons/user.png');
            }
            return <Image source={icon} style={styles.tabIcon} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutsScreen} />
        <Tab.Screen name="Cardio" component={CardioScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  img1:{
    height:200,
    width:350,
    borderRadius:50,
    marginVertical:20

  },
  text1:{
    textAlign:'center',
    fontWeight:'bold',
    marginTop:10
  },
  view1:{
    backgroundColor:'#FFDD3C',
    height:50,
    width:350,
    position:'absolute',
    marginTop:180,
    borderBottomEndRadius:50

  }

});

export default App;
