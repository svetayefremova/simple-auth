import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-simple-auth-6bfc5.cloudfunctions.net';

class SignInForm extends Component  {
  state = {
    phone: '',
    code: ''
  };

  handleSubmit = async () => {
    const { code, phone } = this.state;
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, { phone, code });

      firebase.auth().signInWithCustomToken(data.token);
    } catch(err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <FormLabel>Enter phone number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}/>
          <FormLabel>Enter code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}/>
        </View>
        <Button
          title="Submit"
          onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;