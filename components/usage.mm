/**
 * Example: Native Components in React Native
 */
'use strict';

var {
    MCFileWriterUtil
} = require('NativeModules');

import { requireNativeComponent, PropTypes } from 'react-native';
var React = require('react-native');
var {
 TouchableHighlight,
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
var data ="BB";
var boca ="false";
var myElement = <MyCustomView isRed={true} />;

var Usage = React.createClass({
rowPressed: function (data) {

    console.log('row press');
    MCFileWriterUtil.writeFile(
    data,                       // File name
    'Some Text',                        // File contents
    function errorCallback(results) {
console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
console.log("JJJSSS"+results);

//        alert('Success : ' + results);
    }
    );
  },

  render: function() {
    return (
<View>
      <View style={styles.container}>
        <Text>
          Red one
        </Text>
        <Text>
          Not red one
        </Text>
	        <MyCustomView style={{width: 10, height: 10}} isRed={false}/>
</View>
<View style={styles.buta}>
	<TouchableHighlight onPress={() => this.rowPressed("Y")} underlayColor='#e3e0d7'>
		<Text>Voice Input ON</Text>
	</TouchableHighlight>
	<TouchableHighlight onPress={() => this.rowPressed("N")} underlayColor='#e3e0d7'>
		<Text>Voice Input OFF </Text>
	</TouchableHighlight>


</View>
<View style={styles.buta1}>
	<TouchableHighlight onPress={() => this.rowPressed("V")} underlayColor='#e3e0d7'>
		<Text>NEXT</Text>
	</TouchableHighlight>
	<TouchableHighlight onPress={() => this.rowPressed("B")} underlayColor='#e3e0d7'>
		<Text>BACK</Text>
	</TouchableHighlight>


</View>


});

var styles = StyleSheet.create({
  container: {
 flexDirection:'row'  
},
buta:{
        flexDirection:'row',    //Step 1
            marginTop: 380,
	alignItems:'center',            
	borderWidth: 1,
            borderRadius: 5,
            padding: 5
},
  customView: {
    width: 10,
    height: 10
  },

buta1:{
        flexDirection:'row',    //Step 1

            marginTop: 480,
	alignItems:'center',            
	borderWidth: 1,
            borderRadius: 5,
            padding: 5
}

)};

module.exports= Usage
