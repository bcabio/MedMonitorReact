import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Calendar from '../CalendarComponent/Calendar';
import DayLog from '../DayLogComponent/DayLog';

const CalendarStackNav = StackNavigator({
    CalendarScreen: {
        screen: Calendar,
        navigationOptions:({navigation}) => ({
            title: "Calendar",
        })
    }
    ,
    MedicineLogScreen: {
        screen: DayLog,
        navigationOptions: (props) => ({
            title: "Feb 7, 2018",
        })
    }
})

export default CalendarStackNav;