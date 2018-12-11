import React, { Component } from 'react';
import { 
    Dimensions,
    BackHandler, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Keyboard, 
    StatusBar, 
    Platform, 
    ScrollView, 
    AsyncStorage,
    PixelRatio,
    FlatList,
    TouchableOpacity,
    Animated
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

export default class MainFrame extends Component {
    constructor(props){

    }

    render(){
        return (
            <View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row"
    },
    
});