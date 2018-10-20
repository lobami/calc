/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';





export default class InputNumberButton extends Component {
  render() {
      const { value, handleOnPress } = this.props;
    return (
     
    <TouchableOpacity style={styles.container} onPress={() => handleOnPress(value)}>
        <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
        
      
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 1,
      backgroundColor: '#813FB2',
      justifyContent: 'center',
      alignItems: 'center'
    
    },
    text: {
        color: 'white',
        fontSize: 26
    }
    
   
  });