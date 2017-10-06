import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './client/components/SignUpForm';
import SignInForm from './client/components/SignInForm';

export default class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyBqlEGnJbMR4WkfJHZOw8yhK2QVTU7JsIc",
      authDomain: "simple-auth-6bfc5.firebaseapp.com",
      databaseURL: "https://simple-auth-6bfc5.firebaseio.com",
      projectId: "simple-auth-6bfc5",
      storageBucket: "simple-auth-6bfc5.appspot.com",
      messagingSenderId: "614698933780"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
