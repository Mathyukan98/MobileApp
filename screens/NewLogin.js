import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authActions';
import axios from 'axios';
import COLORS from '../constants/colors';


const NewLogin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = () => {
 
    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: username,
        password: password,
      })
      .then((response) => {
 
        if (response.data.token) {
          dispatch({ type: 'LOGIN_SUCCESS' });
          navigation.navigate('ProductList');
        } else {
         
          alert('Login Failed', 'Invalid username or password');
        }
      })
      .catch((error) => {
        console.error('Login Error:', error);
      
        Alert.alert('Error', 'An error occurred while logging in.');
      });
  };

  return (

    <View style={styles.container}>
                 <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Hi Welcome Back ! 👋
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Hello again you have been missed!</Text>
                </View>
                
                
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default  NewLogin;
