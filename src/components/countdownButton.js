import React, { Component, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {Audio} from "expo-av";

class CountdownButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: props.init
        }
        this.navigation = props.navigation;
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({timer: prevState.timer - 1})),
            1000
        );
    }

    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    convertToMMSS() {
        var mmss = new Date(null);
        mmss.setSeconds(this.state.timer); // specify value for SECONDS here
        var result = mmss.toISOString().substr(14, 5);
        return result;
    }

    navigateToChapter() {
        this.props.navigation.navigate('Chapter');
    }
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.navigateToChapter()}>
                    <Text> {this.convertToMMSS()} </Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default CountdownButton;