import React, { Component } from 'react';
import {Text, View} from 'react-native';
import style from './FooterStyle'

const footer = 'KitchenApp';

export default class Footer extends Component {
    render() {
        return (
            <View style={style.footer}>
                <Text style={style.footerText}>{footer}</Text>
            </View>
        );
    }
}