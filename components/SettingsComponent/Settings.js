import React, { Component } from 'react';
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
  View
} from 'native-base';


class Settings extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content >
          <View >
            <Text>Open up Settings.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Content>


     
      </Container>
    );
  }
}

export default Settings;