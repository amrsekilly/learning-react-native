import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {text: ''};
  }
  render() {
    // greet many people
    return(
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}
