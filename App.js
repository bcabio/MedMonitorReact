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
      settingsTab: false,
      day: 1,     // day of month (1-31)
      month: 1,   // month of year (1-12)
      year: 2018, // year
      timestamp,   // UTC timestamp representing 00:00 AM of this date
      dateString: '2016-05-13'
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