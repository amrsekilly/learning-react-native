import React from 'react';
import { Text, View } from 'react-native';


class Greet extends React.Component {
  render() {
    // return the greeting for the username
    return (<Text>Hello {this.props.username}!!!</Text>);
  }
}

export default class App extends React.Component {
  render() {
    // greet many people
    return(
      <View>
        <Greet username="Amr" />
        <Greet username="Joe" />
        <Greet username="Judy" />
      </View>
    );
  }
}
