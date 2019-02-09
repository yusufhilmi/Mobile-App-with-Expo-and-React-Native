import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

import logoImg from './components/logo.png';


export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
      if(this.state.username == 'yuyu' & this.state.password == 'yoyo'){
    
    this.props.navigation.navigate('Explore')
    }
    else{
      Alert.alert('Credentials', `Wrong Password or Username`);
    }
   }
  

  render() {
    return (

      <View style={styles.container}>
      <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>{"Please Enter Your User Informaiton"}</Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.onLogin(this.state.username, this.state.password)
               }>
               <Text style = {styles.submitButtonText}>{"                Login                "}</Text>
            </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
   image: {
    margin:80,
    width: 80,
    height: 80,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f1',
    borderRadius:20,
  },
    text: {
    color: '#7a42f4',
    backgroundColor: 'transparent',
    margin: 20,
  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      borderRadius:20,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
});
