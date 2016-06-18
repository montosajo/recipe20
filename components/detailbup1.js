'use strict';


var Sound = require('react-native-sound');
var React = require('react-native');
var Carousel = require('react-native-spring-carousel');
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var {
  StyleSheet,
  View,
  TouchableHighlight,
    TouchableOpacity,
  ListView,
  Text,
} = React;

var DetailView =React.createClass ({
  getInitialState: function() {
    return {
      size: {width: width, height: height}
    };
  },
      _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
            console.log(this.state.size);
  },
    
    
    
    render: function () {
    return (
  
     <Carousel
                width={width}
                height={height}
                pagerColor="#000"
                activePagerColor="#ff0000"
                pagerSize={10}
                pagerOffset={10}
                pagerMargin={2}
                speed={2000}
                marginTop={50}
                onPress={this.onPressSlide}
                >
                   <View style={{width:width,height:300,backgroundColor:'blue',}}>
                     <Text>Page 1</Text>
                   </View>
                   <View style={{width:width,height:300,backgroundColor:'green',}}>
                     <Text>Page 2</Text>
                   </View>
                   <View style={{width:width,height:300,backgroundColor:'red',}}>
                     <Text>Page 3</Text>
                   </View>
                </Carousel>
  );
  },
      
       playSound() {
    var s = new Sound('G2.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });
  },

stopSound() {
    
    s.stop();
}
  
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
    container1: {
    width: 375,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

module.exports=  DetailView;