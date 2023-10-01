import React from 'react';
import {
  View,
  Button,
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  // Function to navigate to Signup
  const navigateToSignup = () => {
    navigation.navigate('Signup'); // Replace 'Signup' with the name of your Signup screen in your navigation stack.
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Log in</Text>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.textBox}
        onChangeText={text => {
          // Handle text input
        }}
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.textBox}
        secureTextEntry={true}
        onChangeText={text => {
          // Handle text input
        }}
      />
      <TouchableOpacity>
        <Text style={styles.button2}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.txt}> Or Login with</Text>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: 'https://png.pngitem.com/pimgs/s/516-5166972_facebook-facebook-instagram-logo-vector-2019-hd-png.png',
          }}
        />
        <Text style={styles.button1}>Sign up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/originals/a3/d5/8f/a3d58f0b2820871d486e9851c0fdbb60.jpg',
          }}
        />
        <Text style={styles.button1}>Sign up with Google</Text>
      </TouchableOpacity>
      <Text style={styles.txt}>Don't have an account</Text>
      <TouchableOpacity onPress={navigateToSignup}>
        <Text style={styles.button2}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#4837A0',
  },
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginBottom: 15,
  },
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  button1: {
    height: 25,
    width: 250,
    paddingTop: 2,
    textAlign: 'center',
    borderRadius: 9,
    backgroundColor: '#0892F5',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: 'white',
  },
  button2: {
    height: 25,
    width: 250,
    paddingTop: 2,
    textAlign: 'center',
    borderRadius: 9,
    backgroundColor: '#3c87f7',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    color: 'white',
  },
  txt: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 16,
    height: 16,
    marginLeft: 100,
    paddingBottom: 20,
    alignItems: 'center',
  },
});

export default Login;
