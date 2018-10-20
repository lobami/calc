/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';




export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>0</Text>
        </View>
        <View style={styles.inputContainer}>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  resultContainer:{
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#1E1240',
  },
  inputContainer:{
    flex: 8,,
    backgroundColor: '#3D0075',
  },
  resultText:{
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
 
});
