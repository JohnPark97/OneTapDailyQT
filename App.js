import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
    ButtonGroup, FlatList,
} from 'react-native';
import {
    Icon,
    Overlay
} from 'react-native-elements';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BorderlessButton from "@react-navigation/stack/src/views/BorderlessButton";
import Mood from "./src/constants/Mood";
import Answers from "./src/constants/Answers";
import Books from "./src/constants/Books";
import CountdownButton from "./src/components/countdownButton";
import { Audio } from "expo-av";

global.currentBook = "";
global.audioPlaying = false;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            soundPlayingStatus: "none",
        };
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen name="Main"
                                  component={MainScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Question"
                                  component={QuestionScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Feeling"
                                  component={FeelingQuestionScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Ask"
                                  component={AskScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Suggest"
                                  component={SuggestScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Meditation"
                                  component={MeditationScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Chapter"
                                  component={ChapterScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="Prayer"
                                  component={PrayerScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                    <Stack.Screen name="EndScreen"
                                  component={EndScreen}
                                  options={({navigation, route}) => ({
                                      headerTitle: props => <Text/>
                                  })}/>
                </Stack.Navigator>
                <StatusBar style="auto"/>
            </NavigationContainer>
        );
    }


}

const Stack = createStackNavigator();

function MainScreen({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Question')}>
                <Image
                    style={styles.image}
                    source={require("./src/assets/img/bible.png")}/>
            </TouchableOpacity>
            <Text style={styles.title}>Click the bible to start</Text>
        </View>

    );
}

function QuestionScreen({navigation}) {
    return (
        <View>
            <Button title="Start QT" onPress={() => navigation.navigate('Feeling')}/>
            <Text>What is QT? ...</Text>
            <Button title="History"/>
            <Button title="Help"/>
            <Button title="Exit"/>
        </View>
    );
}

function FeelingQuestionScreen({navigation}) {
    return (
        <View>
            <Text>How are you feeling today?</Text>
            <ScrollView>
                {Mood.map((mood) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ask')}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>
                                {mood}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

function AskScreen({navigation}) {
    return (
        <View>
            <Text>What would you like to ask God today?</Text>
            <ScrollView>
                {Answers.map((answer) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Suggest')}
                            style={styles.buttonStyle}>
                            <Text style={styles.buttonTextStyle}>
                                {answer}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

function SuggestScreen({navigation}) {
    return (
        <View>
            <Text>Here are the list of books we recommend you for today</Text>
            <ScrollView>
                {Books.map((book) => {
                    const [visible, setVisible] = useState(false);
                    const toggleOverlay = () => {
                        setVisible(!visible);
                    };
                    const moveToMeditation = () => {
                        if (!visible) {
                            global.currentBook = book.name;
                            navigation.navigate('Meditation')
                        }
                    };
                    return (
                        <View style={styles.bookListStyle}>
                            <TouchableOpacity
                                style={styles.bookTextStyle}
                                onPressIn={() => moveToMeditation()}>
                                <Text style={styles.buttonTextStyle}>
                                    {book.name}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.lightBulbStyle}
                                delayLongPress={500}
                                onLongPress={() => toggleOverlay()}
                                onPressOut={() => toggleOverlay()}>
                                <Icon
                                    name='light-bulb'
                                    type='octicon'/>
                            </TouchableOpacity>
                            <Overlay
                                isVisible={visible}
                                onBackdropPress={toggleOverlay}>
                                <Text>{book.description}</Text>
                            </Overlay>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

function getChapters({navigation}) {
    let chapters = 0;
    {
        Books.map((book) => {
            if (book.name === global.currentBook) {
                chapters = book.chapters;
            }
        })
    }
    let buttons = [];
    for (let i = 1; i <= chapters; i++) {
        buttons.push(
            {key: i}
        )
    }
    return buttons;
}

async function playSound(soundObject) {
    audioPlaying = true;
    await soundObject.loadAsync(require('./src/assets/audio/meditation.mp3'))
    await soundObject.playAsync();
}

async function pauseSound(soundObject) {
    await soundObject.pause();
}

async function resumeSound(soundObject) {
    await soundObject.resumeAsync();
}

function MeditationScreen({navigation}) {
    var soundObject = new Audio.Sound();
    if (!audioPlaying) {
        playSound(soundObject);
    }
    return (
        <View>
            <Text>Choose a chapter and meditate on what God is telling you today</Text>
            <CountdownButton navigation={navigation} init={15}/>
            <Icon name='caretright'
                  onPress={() => resumeSound(soundObject)}
                  type='antdesign'/>
            <Icon name='pause'
                  onPress={() => pauseSound(soundObject)}
                  type='antdesign'/>
        </View>
    )
}

function ChapterScreen({navigation}) {
    return (
        <View>
            <Text>Which Chapter did you choose?</Text>
            <FlatList
                data={getChapters(navigation)}
                renderItem={({item}) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Prayer')}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonTextStyle}>
                            {item.key}
                        </Text>
                    </TouchableOpacity>}
            />
        </View>
    )
}


function PrayerScreen({navigation}) {
    return (
        <View>
            <Text>Have a time of prayer on today's message. After done praying, press continue</Text>
            <Button
                title="Continue"
                onPress={() => navigation.navigate('EndScreen')}/>
        </View>
    )
}

function EndScreen({navigation}) {
    return (
        <View>
            <Text>Enjoy another day in God. Have a blessed day</Text>
            <Button
                title="Amen"
                onPress={() => navigation.navigate('Question')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonStyle: {
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#cafff9',
    },
    buttonTextStyle: {
        color: 'black',
        justifyContent: 'center',
        fontSize: 16,
    },
    bookListStyle: {
        height: 40,
        backgroundColor: '#cafff9',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default App;