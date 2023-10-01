import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
class Signup extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Sign Up</Text>

        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={text => {
            this.setState({name: text});
          }}
        />
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.textBox}
          onChangeText={text => {
            this.setState({email: text});
          }}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.textBox}
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({password: text});
          }}
        />
        <Text style={styles.txt}> Or Sign up with</Text>
        <TouchableOpacity>
          <Text style={styles.button1}>Sign up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button1}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.button2}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textBox: {
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 8,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#4837A0',
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
  text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginBottom: 15,
  },
  txt: {
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'bold',
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
});
export default Signup;
