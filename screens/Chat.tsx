import {Dimensions, Text, View} from 'react-native';
import React from 'react';
import {styles} from "./ChatStyle";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat</Text>
            <View style={styles.overlay}>

                <View style={styles.chatBox}>
                    <View style={styles.chatIcon}></View>
                    <View style={{marginRight:30}}><Text style={styles.name}>Sid Varanasi</Text>
                        <Text style={styles.message}>This is a message preview!</Text>
                    </View>
                    <Text style={styles.pronouns}>(He/Him/His)</Text>
                </View>

                <View style={styles.chatBox}>
                    <View style={styles.chatIcon}></View>
                    <View style={{marginRight:20}}><Text style={styles.name}>Lauren Smith</Text>
                        <Text style={styles.message}>This is a message preview!</Text>
                    </View>
                    <Text style={styles.pronouns}>(She/Her/Hers)</Text>
                </View>

                <View style={styles.chatBox}>
                    <View style={styles.chatIcon}></View>
                    <View style={{marginRight:30}}><Text style={styles.name}>Jack Harlow</Text>
                        <Text style={styles.message}>This is a message preview!</Text>
                    </View>
                    <Text style={styles.pronouns}>(He/Him/His)</Text>
                </View>
            </View>
        </View>
    );
}