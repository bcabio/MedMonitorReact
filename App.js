import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
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

import FooterWrapper from './components/FooterWrapperComponent/FooterWrapper';

class App extends Component {


  render() {
    return (
      <Container> 
       
        <FooterWrapper/>
        

        
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

export default App;