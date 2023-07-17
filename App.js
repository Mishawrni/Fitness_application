import React,{useState} from 'react';
import {Text,View,TextInput,Image,TouchableOpacity,StyleSheet,Alert,ImageBackground,SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './Screens/Srart';
import Home from './Screens/Home';
import Login from './Screens/login';
import Food from './Screens/Home/Food';
import Nutration from './Screens/Home/Nutration';
import Chest from './Screens/workouts/Chest';
import Bieceps from './Screens/workouts/Bieceps';
import Triceps from './Screens/workouts/Triceps';
import Legs from './Screens/workouts/Legs';
import Shoulder from './Screens/workouts/Shoulder';
import Back from './Screens/workouts/Back';
import HomeWorkout from './Screens/workouts/HomeWorkout';
import ABS from './Screens/workouts/ABS';
import Fatburn from './Screens/Cardio/fatburn';
import Warmup from './Screens/Cardio/Warmup';
import Track from './Screens/Home/TrackYourGoal';







import SignUp from './Screens/signup';
const Stack=createStackNavigator();
function App(){
  return(<NavigationContainer independent={true}>
  <Stack.Navigator>
  <Stack.Screen name="Start" component={Start}/>
  <Stack.Screen name="Login" component={Login} />
  <Stack.Screen name="Home" component={Home} />
  
 
  <Stack.Screen name="SignUp" component={SignUp}/>
  <Stack.Screen name="Food"component={Food}/>
  <Stack.Screen name="Nutration" component={Nutration}/>
  <Stack.Screen name="Chest" component={Chest}/>
  <Stack.Screen name="Bieceps" component={Bieceps}/>
   <Stack.Screen name="Triceps" component={Triceps}/>
   <Stack.Screen name="Legs" component={Legs}/>
   <Stack.Screen name="Shoulder" component={Shoulder}/>
    <Stack.Screen name="Back" component={Back}/>
     <Stack.Screen name="HomeWorkout" component={HomeWorkout}/>
        <Stack.Screen name="ABS" component={ABS}/>
         <Stack.Screen name="Fatburn" component={Fatburn}/>
           <Stack.Screen name="Warmup" component={Warmup}/>
             <Stack.Screen name="Track" component={Track}/>





   </Stack.Navigator>
  </NavigationContainer>);
}
export default App;