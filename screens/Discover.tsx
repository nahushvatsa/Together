import {
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from "./DiscoverStyle";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default function Discover(search: any) {
  return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover Groups</Text>
            <View style={styles.overlay}>
                <TextInput
                    style={styles.search}
                    placeholder={"Search for Leaders or Communities"}
                    value={search}>
                </TextInput>
                <Text style={styles.subHeadings}>Leaders</Text>
                <View style={styles.leaders}></View>

            </View>
        </View>
  );
}
