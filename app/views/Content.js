import React from 'react';
import {StyleSheet, Stylesheet, View} from 'react-native';
import {Header} from '../sections/Header';

export class Content extends React.Component{
    static navigationOptions = {
        header: null;
    };
    render(){
        return (
            <View style={styles.container}>
                <Header message ='Press to Login'/>
                <Hero/>
                <Menu/>
            </View>
        )
    };
}
const styles = StyleSheet.create({

})