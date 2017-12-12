import React, { Component } from 'react';
import {Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './AddGroceriesStyle'
import Footer from '../../components/Footer/Footer'

export default class AddGroceries extends Component {
    handleRedirect = (destination) => {
        console.log(destination);
    };

    static navigationOptions = (navigation) => ({
        headerStyle : {
            backgroundColor : '#253309'
          }
    });

    render() {
        return (
            <View style={style.container}>
                <View style={style.contents}>
                    <Text>Herro</Text>
                </View>
                <Footer/>
            </View>
        );
    }
}