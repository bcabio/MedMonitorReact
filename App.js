import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
  Badge 
} from 'native-base';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    };
  }

 toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content active={this.state.tab1} onPress={() => this.toggleTab1()} >
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Content>
        <Footer style={{backgroundColor:'#000'}} >
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Image active={this.state.tab1}
                      source={require('./assets/pill.png')}
                      style={{width: 32, height: 32}} 
                      name="medicine" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Image active={this.state.tab2}
                      source={require('./assets/calendar.png')}
                      style={{width: 32, height: 32}} 
                      name="calendar" />
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Image active={this.state.tab3}
                      source={require('./assets/settings.png')}
                      style={{width: 32, height: 32}} 
                      name="settings" />
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

export default App;