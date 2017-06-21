import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';


export default class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    // greet many people
    return(
      <View style={{padding: 100}}>
        <Button
          onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press Me"
        />
      </View>
    );
  }
}
