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

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';


class Calendar2 extends Component {
	render() {
		return (
			<Container>
       
        <Content>
          

        

  <CalendarList
  // Callback which gets executed when visible months change in scroll view. Default = undefined
  onVisibleMonthsChange={(months) => {}}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={1}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={5}
  // Enable or disable scrolling of calendar list
  scrollEnabled={true}
  // Enable or disable vertical scroll indicator. Default = false
  showScrollIndicator={true}

  /// Initially visible month. Default = Date()
    current={'2018-02-03'}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={'2018-01-01'}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={'2018-04-14'}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={(day) => {this.props.navigation.navigate("MedicineLogScreen")}}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={'MMMM d yyyy'}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={(month) => {}}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={(direction) => (<Arrow />)}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={false}
    // Show week numbers to the left. Default = false
    showWeekNumbers={false}

    style={{
    borderWidth: 1,
    borderColor: 'gray',
    // height: 350
  }}

  // This is for marking the dates to take their medication
   markedDates={{
    '2018-02-01': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-02': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-03': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-04': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-05': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-06': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-07': {marked: true, dotColor: 'blue', activeOpacity: 0},
    '2018-02-08': {selected: true, marked: true, selectedColor: 'blue'},

    '2018-02-22': {selected: true, dotColor: 'red', activeOpacity: 0},
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}
  
/>

       
               </Content>


      </Container>
		);
	}
}

export default Calendar2;
