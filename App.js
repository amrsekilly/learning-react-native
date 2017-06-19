import React from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Timer extends React.Component {
  // create a constructor to intialize the state
  constructor() {
    super();
    // initialize the time with zero
    this.state = {time: 0};

    // increment timer by 1 second each second
    setInterval( () => {
      this.setState(prevState => {
        return { time: ++prevState.time  };
      });
    }, 1000);
  }

  render() {
    // return the greeting for the username
    let timer = this.state.time;
    return (<Text>Time: {timer}</Text>);
  }
}

export default class App extends React.Component {
  render() {
    // greet many people
    return(
      <View style={styles.container}>
        <Timer />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
