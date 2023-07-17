import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,SafeAreaView,Text,TouchableOpacity,Alert } from 'react-native';

const SignupPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
  const userData = {
    firstName,
    lastName,
    gender,
    email,
    username,
    password,
  };

  fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      
     
      if (data.message === 'Signup successful') {
        
        navigation.navigate('Login',{ username, password });
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

  return (
    <SafeAreaView style={styles.containerSafe}>
    <View style={styles.maincontainer}>
    <Text style={{fontSize:20,paddingTop:10,textAlign:'center'}}>
      Hi there,
    </Text>
    <Text style={{fontWeight:'bold',fontSize:30,textAlign:'center'}}> Create An Account</Text>
  
    <View style={styles.container}>
    
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
    style={styles.buttonContainer}
    onPress={() => {
      Alert.alert("Registration is Sucessful!")
      

     
        navigation.navigate('Login',{ username, password });
      }
   }>
    
    <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
    

  
  
    </View>


    </View>
    
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius:50,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderColor:'black',
   
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor:'white'
  },
  containerSafe:{
    backgroundColor:'white',
    flex:1

  },
  maincontainer:{
    backgroundColor:'white',
    flex:1


  },
  buttonContainer :{
    backgroundColor:'black',
    paddingVertical:15,
    borderRadius:50,
    marginTop:100,
    width:350,
    height:60
    

  },
  buttonText: {
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    paddingTop:5
    
  }
});

export default SignupPage;
