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
  View,
  List,
  ListItem
} from 'native-base';


class Settings extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Settings
            </Title>
          </Body>
        </Header>
        <Content >
          <List>
            <ListItem icon>
              <Left>
                <Icon name="ios-add"/>
              </Left>
              <Body>
                <Text> Add Medications</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline"/>
              </Right>
            </ListItem>

            <ListItem icon>
              <Left>
                <Icon name="ios-person"/>
              </Left>
              <Body>
                <Text> Edit Profile</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward-outline"/>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Settings;