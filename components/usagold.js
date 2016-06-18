/**
 * Example: Native Components in React Native
 */
'use strict';
import { requireNativeComponent, PropTypes } from 'react-native';
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;
var iface = {
  name: 'MV001',
  propTypes: {
  
    isRed:PropTypes.bool

  },
};
var MyCustomView = requireNativeComponent('MyCustomView', iface);




var Usage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text>
          Red one
        </Text>
        <Text>
          Not red one
        </Text>
        <MyCustomView style={{width: 10, height: 10}} isRed={false}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  customView: {
    width: 10,
    height: 10
  }
});

module.exports= Usage
