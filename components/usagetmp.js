/**
 * Sample React Native App showing use of AwesomeButton
 */


const React = require('react-native')
const AwesomeButton = require('react-native-awesome-button')


const {
  AppRegistry,
  Component,
  View,
  StyleSheet
} = React


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})


class Usage extends Component {
  
  handleButtonPress() {
    console.log('I was pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton states={{
                        default: {
                          text: 'Press me',
backgroundColor: '#1155DD',
                          onPress: this.handleButtonPress,
                        }
                       }} />
      </View>
    )
  }

}


module.exports = Usage;
