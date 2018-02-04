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
        <Content active={this.state.pillTab} onPress={() => this.pillPress()} >
          <View style={styles.container}>
            <Text></Text>
            <Button large info><Text>Medicine 1</Text></Button>
            <Text></Text>
            <Button large info><Text>Medicine 2</Text></Button>
            <Text></Text>
            <Button large info><Text>MEdicine 3</Text></Button>
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