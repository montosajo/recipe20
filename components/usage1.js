/**
 *  Native Components -Polipetix in React Native
 */
'use strict';

var {
    MCFileWriterUtil
} = require('NativeModules');

const AwesomeButton = require('react-native-awesome-button');

import { requireNativeComponent, PropTypes } from 'react-native';
var React = require('react-native');
var {
 AlertIOS,
 PushNotificationIOS,
 TouchableHighlight,
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Component,
 Image
} = React;
var iface = {
  name: 'MV001',
  propTypes: {
  
    isRed:PropTypes.bool

  },
};
var MyCustomView = requireNativeComponent('MyCustomView', iface);
var data ="BB";
var indica1 = "require('./ajax-loader.gif'";

var myElement = <MyCustomView isRed={true} />;
var mask=1;
class Usage extends Component {
constructor(props) {
    super(props);
 super(props);
    this.state = { myKey: 'foo' ,myKey1: 'zoo',count : 0};
    this.rowPressedB = this.rowPressedB.bind(this);
    this.rowPressedV = this.rowPressedV.bind(this);
    this.rowPressedY = this.rowPressedY.bind(this);
    this.rowPressedN = this.rowPressedN.bind(this);
   
  }
   
    rowPressedY(){
         console.log('row press');
          this.setState({ myKey1: 'koo'});
    MCFileWriterUtil.writeFile(
    "Y",                       // Action -  Next back sound on/off
    'Some Text',                        // To be used 
    function errorCallback(results) {
          console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
        console.log("JJJSSS"+results);

//        alert('Success : ' + results);
    }
    );
       
    }
    rowPressedN(){
          console.log('row press');
          this.setState({ myKey1: 'zoo'});
    MCFileWriterUtil.writeFile(
    "N",                       // Action -  Next back sound on/off
    'Some Text',                        // To be used 
    function errorCallback(results) {
          console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
        console.log("JJJSSS"+results);

//        alert('Success : ' + results);
    }
    );
        
    }
     displayState() {
  console.log(this.state)
  this.setState({ myKey: 'foo'});
}
     _sendLocalNotification() {
    var cutMe = new Date();
    cutMe.setSeconds(cutMe.getSeconds() + 10); require('RCTDeviceEventEmitter').emit('localNotificationReceived', {
      aps: {
        alert: 'Sample local notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE',
        fireDate: {cutMe}  
          
        
      },
    });
  }
    rowPressedV(){
        mask = this.state.count;
        mask = mask+1;
        this.setState({ count :mask });
       this._sendLocalNotification; console.log("vvvvvvvjjjjjjjjjjvvvvvvvvv"+this.state.count);
        this.setState({ myKey: 'boo'});
     //   console.log('row Vorward press'+this.state.myKey);
        var imeoutID = window.setTimeout(this.displayState.bind(this), 4000);  
        
  MCFileWriterUtil.writeFile(
     "V",                                // Action -  Next back sound on/off
    'Some Text',                        // To be used 
    function errorCallback(results) {
          console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
        console.log("JJJSSS"+results);

//        alert('Success : ' + results);
    }
    );  
        
    }
    rowPressedB(){
       mask = this.state.count;
        mask = mask-1;
        this.setState({ count :mask });
        console.log("vvvvvvvjjjjjjjjjjvvvvvvvvv"+this.state.count);
        this.setState({ myKey: 'boo'});
        console.log('row BACK '+this.state.myKey);
        var imeoutID = window.setTimeout(this.displayState.bind(this), 4000);  
    MCFileWriterUtil.writeFile(
    "B",                       // Action -  Next back sound on/off
    'Some Text',                        // To be used 
    function errorCallback(results) {
          console.log(results);
//        alert('Error: ' + results);
    },
    function successCallback(results) {
        console.log("JJJSSS"+results);

//        alert('Success : ' + results);
    }
    );
        
    }

componentWillMount() {
   
    // Add listener for local notifications
    PushNotificationIOS.addEventListener('localNotification', this._onLocalNotification);
  }
    
     _onLocalNotification(notification){
    AlertIOS.alert(
      'Local Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
    
    
  render() {
      console.log (this.state.myKey1);
      if ( this.state.myKey == 'boo'){
      var indica1 = require('./indi.gif');}
      if ( this.state.myKey == 'foo'){
      var indica1 = require('./gr.png');}
      
       if ( this.state.myKey1 == 'zoo'){
      var indica2 = require('./micof.png');}
      if ( this.state.myKey1 == 'koo'){
      var indica2 = require('./micin.png');}
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
      <View >
	
<View style={styles.buta}>
       
        <AwesomeButton 
        backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
        states={{
                        default: {
backgroundColor: '#1155DD',
                          text: 'Voice Input ON',
                          onPress: this.rowPressedY
                        }
                       }} />
        <AwesomeButton 
        backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
        states={{
                        default: {
backgroundColor: '#1155DD',
                          text: 'Voice Input OFF',
                          onPress: this.rowPressedN,
                        }
                       }} />
        <AwesomeButton
        backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
        states={{
                        default: {
backgroundColor: '#1155DD',
                          text: 'NEXT',
                          onPress: this.rowPressedV
                        }
                       }} />
        <AwesomeButton 
        backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
        states={{
                        default: {
backgroundColor: '#1155DD',
                          text: 'BACK',
                          onPress: this.rowPressedB
                        }
                       }} />

      </View>
<View style={styles.iconz} ><Image source={indica1} style={{width: 20, height: 20, backgroundColor: 'transparent'}}/><Image source={indica2} style={{width: 20, height: 20, backgroundColor: 'transparent'}}/></View>
	</View>
     


</View>
) }


}

var styles = StyleSheet.create({
  container: {
 //flexDirection:'row'
},
buta:{
        flexDirection:'row',    //Step 1
            marginTop: 280,
            alignItems:'center',
            //borderWidth: 1,
            borderRadius: 5,
            padding: 8
},
  
    loginButtonBackground: {
    flex: 1,
    height: 20,
    borderRadius: 5
  },
   loginButtonLabel: {
    color: 'white',
      fontSize :8
  },
 iconz:{
        backgroundColor:'#ebeef0',
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center'     //<-----
    }
});



module.exports= Usage
