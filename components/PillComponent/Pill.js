import React, { Component } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import { 
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
  Badge,
  View,
  Input
} from 'native-base';

import { StackNavigator } from 'react-navigation';

class Pill extends Component {

  state = {
    isModalVisible: false
  }

  _toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  }

  render() {
    return (
      <Container>
        
        <ScrollView contentContainerStyle={styles.contentContainer} scrollEnabled={false}>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("MedicineInputScreen")}
            >
            <Image
              style={styles.ImageShadow}
              className="big-med-button"
              source={require('../../assets/pill_button.png')}
              />
          </TouchableHighlight>
          <Text style={{fontSize: `25px`}}>
          {"\n"}
            Tap the PLUS to Track Medicine
          
          </Text>
        </ScrollView>
      </Container>
      );
  }

}

export default Pill;

const styles = StyleSheet.create({
  contentContainer : {
    justifyContent: `center`,
    alignItems: `center`,
    marginTop: 150
  },
  modal : {
    backgroundColor: `#f7021a`,
    height: 50,
    width: 35,
    elevation: 999
  }
})
