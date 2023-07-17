import * as react from 'react';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Alert,
  Button,
} from 'react-native';
import Constants from 'expo-constants';

function LoginScreen({ navigation }) {
  const [username1, setUserName1] = useState('');
  const [password1, setPassword1] = useState('');

  const route = useRoute();
  const { username, password } = route.params ?? {};

  const loginhandle = () => {
    if (username === username1 && password === password1) {
      Alert.alert("WELCOME TO UNLIMITED PSYCHE")
      navigation.navigate('Home');
    } else {
      Alert.alert('Incorrect User Name or Password');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentCenter}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 30,
            width: 80,
            borderRadius: 50,
            marginLeft: 250,
            marginTop: 50,
          }}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ textAlign: 'center', paddingTop: 5, color: 'black' }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: 'white' }}>Hi there,</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>
          Welcome Back,{username}
        </Text>
      </View>

      <View style={styles.paddingContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUserName1}
          //defaultValue={username1}
          returnKeyType="next"></TextInput>

        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          onChangeText={setPassword1}
          //defaultValue={password1}
          returnKeyType="go"></TextInput>

        <TouchableOpacity style={styles.buttonContainer} onPress={loginhandle}>
          <Text style={styles.buttonText}>Login</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}></TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  paddingContainer: {
    padding: 20,
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    backgroundColor: 'white',
    color: 'black',
    marginBottom: 20,
    fontSize: 20,
    paddingHorizontal: 10,
    borderRadius: 50,
    fontSize: 15,
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
export default LoginScreen;
