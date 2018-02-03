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
  Badge 
} from 'native-base';


class Settings extends Component {
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

export default Settings;