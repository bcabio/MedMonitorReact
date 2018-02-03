import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Tab1 from './components/Tab1/Tab1';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
      </View>

        </Content>
        <Footer>
                 

          <FooterTab>
                <Button>
                  <Icon name="apps" />
                </Button>
                <Button>
                  <Icon name="camera" />
                </Button>
                <Button active>
                  <Icon active name="navigate" />
                </Button>
                <Button>
                  <Icon name="person" />
                </Button>
          </FooterTab>
            

        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
