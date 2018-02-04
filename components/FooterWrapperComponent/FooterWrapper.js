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

import { TabNavigator } from "react-navigation";

import Calendar from "../CalendarComponent/Calendar";
import Pill from "../PillComponent/Pill";
import Settings from "../SettingsComponent/Settings";
import StackNav from "../StackNavComponent/StackNav";

export default (FooterWrapper = TabNavigator(
  {
    StackNavPage : { screen : StackNav}, 
    CalendarPage : { screen : Calendar}, 
    SettingsPage : { screen : Settings }  
  },
  {
    tabBarPosition: "bottom", 
    tabBarComponent: props => {
      return (

        <Footer style={{backgroundColor:'#000'}} >
          <FooterTab>
            <Button 
              active={props.navigationState.index === 0} 
              onPress={() => props.navigation.navigate("StackNavPage")}>
              
              <Image 
                      active={props.navigationState.index === 0}
                      source={require('../../assets/pill.png')}
                      style={{width: 32, height: 32}} 
                      name="medicine" />
            </Button>
            <Button 
              active={props.navigationState.index === 1} 
              onPress={() => props.navigation.navigate("CalendarPage")}>
              
              <Image active={props.navigationState.index === 1}
                      source={require('../../assets/calendar.png')}
                      style={{width: 32, height: 32}} 
                      name="calendar" />
            </Button>
            <Button 
              active={props.navigationState.index === 2} 
              onPress={() => props.navigation.navigate("SettingsPage")}>

              <Image active={props.navigationState.index === 2}
                      source={require('../../assets/settings.png')}
                      style={{width: 32, height: 32}} 
                      name="settings" />
            </Button>
          </FooterTab>
        </Footer>
        );
    }
  }
));


// class FooterWrapper extends Component {
//   render() {
//     return (
//        <Footer style={{backgroundColor:'#000'}} >
//           <FooterTab>
//             <Button active={this.state.pillTab} onPress={() => this.props.pillToggle.bind(this)}>
//               <Image active={this


//               }
//                       source={require('./pill.png')}
//                       style={{width: 32, height: 32}} 
//                       name="medicine" />
//             </Button>
//             <Button active={this.state.calendarTab} onPress={() => this.calendarPress()}>
//               <Image active={this.state.calendarTab}
//                       source={require('./calendar.png')}
//                       style={{width: 32, height: 32}} 
//                       name="calendar" />
//             </Button>
//             <Button active={this.state.settingsTab} onPress={() => this.settingsPress()}>
//               <Image active={this.state.settingsTab}
//                       source={require('./settings.png')}
//                       style={{width: 32, height: 32}} 
//                       name="settings" />
//             </Button>
//           </FooterTab>
//         </Footer>
//       );
//   }
// }

// export default FooterWrapper;