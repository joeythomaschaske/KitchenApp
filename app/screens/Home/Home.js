import React, { Component } from 'react';
import {Platform, Text, View, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from './HomeStyle'
import Footer from '../../components/Footer/Footer'

const greeting = Platform.select({
  ios: 'Hi Lilly, what would you like to do?',
  android: 'Hi Joseph, what would you like to do?'
});

export default class Home extends Component {

    static navigationOptions = (navigation) => ({
        header : null
    });

    handleRedirect = (destination) => {
        console.log(destination);
    };

    render() {
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <Text style={style.greeting}>{greeting}</Text>
                </View>
                <View style={style.contents}>
                    <View style={style.buttonView}>
                        <Button color="#B5C596" title="Add Groceries" onPress={() => this.handleRedirect('add groceries')}/>
                    </View>
                    <View style={style.buttonView}>
                        <Button color="#B5C596" title="Remove Groceries" onPress={() => this.handleRedirect('remove groceries')}/>
                    </View>
                    <View style={style.buttonView}>
                        <Button color="#B5C596" title="Recipe Suggestions" onPress={() => this.handleRedirect('recipe suggestions')}/>
                    </View>
                </View>
                <Footer/>
            </View>
        );
    }
}