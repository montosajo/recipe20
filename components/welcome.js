'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  View,
  Text,
    TextInput,
    Image,
    Component,
    ScrollView,
    TouchableWithoutFeedback
} = React;
 
var baseFontSize = 16;
import { NativeModules } from 'react-native';
var Sound = require('react-native-sound');
var ResponsiveImage = require('react-native-responsive-image');
class Welcome extends Component {
  render() {
      
      var d = new Date();
      console.log("ddddddd"+d.getTime() );
     // var CalendarManager =    NativeModules.CalendarManager;
    //  CalendarManager.addEvent('Birthday Party', '4    Privet Drive, Surrey', "2016-07-01T21:39:22.123Z"); // passing date as number of seconds since Unix epoch);
    return (
        
     
<View style={styles.mainContainer}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}></Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
         
      <View style={{flex: 1,}}>
            <View style={{ flexDirection:'column',alignItems:'center',marginTop:50}} >
                    <ResponsiveImage source={require('./mas.jpg')} initWidth="300" initHeight="200"/>
                  
            </View>
         </View>
    
    <ScrollView ref='scrollView' keyboardDismissMode='interactive' style={styles.scrollView} showsVerticalScrollIndicator= {true} contentContainerStyle={styles.contentContainer}>

          <View style={styles.message}>
            <Text   style={styles.description}>This is a voice interactive recipe. It will tell you each step, and then when you say NEXT, it will tell you the next one, until such time as food hits the stove or the oven.  Actual cooking steps are timer controlled, and the app will tell you when these steps are finished or food needs attention.  If you miss a step, saying REPEAT will have the step said again.  BACK will take you back an entire step.  {"\n"}The word you said will appear in a Red bar, which will turn Green when the app is available for the next step.  {"\n"}If you leave the recipe before a timer starts, you can return where you left it.  If you leave after a timer begins, the app will tell you when the timer is over, and the food needs attention.If you decide to abandon the recipe, hit RESET, or return to the HOME tab.   {"\n"}We suggest you read the recipe STEPS before you start, and use the TOOLS and INGREDIENTS tabs to assemble everything you need before you start.  {"\n"}The app voice input system can be affected by Background noise, particular accents. among other working place  conditions. so we suggest you test it before you cook, using the Voice command on-off switch ( in COOK Tab ) that will show your commands WITHOUT processing them.</Text>
                    </View>
                      </ScrollView>
                  
         

        

   
      
   
    
    
    
        
        <View style={styles.botbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>© Trapipi  LLC   & Frank Piuck 2015-2016 </Text>
                    <Text style={styles.toolbarButton}></Text>
                </View>
            </View>
 
    );
  }
}
var styles = require('./styles.js');
/* var styles = StyleSheet.create({
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:80,
        paddingBottom:10,
        flexDirection:'row',    //Step 1
    },
     botbar:{
        backgroundColor:'#81c04d',
        paddingTop:20,
        paddingBottom:50,
        flexDirection:'row' ,
          alignItems: 'flex-end'//Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1     
    },
     mainContainer:{
        flex:1                 //Step 1 1
    },
     base64: {
    
    height: 100,
    width: 100,
  },
    content:{
        backgroundColor:'#ebeef0',
        
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center'//Step 2
    }//Step 3
});*/

module.exports = Welcome;