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
      pillTab: false,
      calendarTab: false,
      settingsTab: true
    };
  }

 togglePillActive() {
    this.setState({
      pillTab: true,
      calendarTab: false,
      settingsTab: false
    });
  }

  toggleCalendarActive() {
    this.setState({
      pillTab: false,
      calendarTab: true,
      settingsTab: false
    });
  }

  toggleSettingsTab() {
    this.setState({
      pillTab: false,
      calendarTab: false,
      settingsTab: true
    })
  }


  pillPress() {
    this.togglePillActive();
  }

  calendarPress() {
    this.toggleCalendarActive();
  }

  settingsPress() {
    this.toggleSettingsTab()
  }

  render() {
    return (
      <Container>
        <Header />
        <Content active={this.state.pillTab} onPress={() => this.pillPress()} >
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>Changes you make will automatically reload.</Text>
            <Text>Shake your phone to open the developer menu.</Text>
          </View>
        </Content>
        <Footer style={{backgroundColor:'#000'}} >
          <FooterTab>
            <Button active={this.state.pillTab} onPress={() => this.pillPress()}>
              <Image active={this.state.pillTab}
                      source={require('./assets/pill.png')}
                      style={{width: 32, height: 32}} 
                      name="medicine" />
            </Button>
            <Button active={this.state.calendarTab} onPress={() => this.calendarPress()}>
              <Image active={this.state.calendarTab}
                      source={require('./assets/calendar.png')}
                      style={{width: 32, height: 32}} 
                      name="calendar" />
            </Button>
            <Button active={this.state.settingsTab} onPress={() => this.settingsPress()}>
              <Image active={this.state.settingsTab}
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