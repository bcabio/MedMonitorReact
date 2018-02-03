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
       
        <FooterWrapper 
            pillToggle={this.pillPress}
            calendarToggle={this.calendarPress}
            settingsToggle={this.settingsPress}

        />
        

        
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