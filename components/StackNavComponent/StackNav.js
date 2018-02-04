import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Pill from '../PillComponent/Pill';
import MedicineInput from '../MedicineInputComponent/MedicineInput';    

const StackNav = StackNavigator({
    PillScreen: {
        screen: Pill,
        navigationOptions:({navigation}) => ({
            title: "Med Monitor",
        })
    }
    ,
    MedicineInputScreen: {
        screen: MedicineInput,
        navigationOptions: (props) => ({
            title: "Detail",
        })
    }
})

export default StackNav;