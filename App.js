import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from './yourPathToSideBar'; 
import { Drawer, Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

var array = [];


export default class App extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      // Main View
      </Drawer>

      <Container>
        <Header />
        <Content>
          <Text></Text>

          <Button block info>
            <Text>
              Allegra
            </Text>
          </Button>
          
          <Text></Text>

          <Button full info>
            <Text>
              Advil
            </Text>
          </Button>

          <Text></Text>

          <Button block info>
            <Text>
              Anti-Inflammatory
            </Text>
          </Button>
          
          <Text></Text>

          <View style={styles.container}>
          <Text> End of list </Text>
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
  