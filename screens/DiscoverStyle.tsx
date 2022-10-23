import {StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../config/colors';
import React, { Component} from 'react';

const primary = '#fce0c7';
const secondary = colors.black;
const inputColor = colors.gray;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#AC5E30',
        flex: 1,
        flexDirection: 'column',
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        marginTop: height * 0.12,
        backgroundColor: primary,
        borderRadius: width * 0.1,
        height: height,
        width: width,
        paddingHorizontal: width * 0.1,
        paddingTop: height * 0.02,
    },
    title: {
        fontSize: 35,
        color: primary,
        marginTop: height * 0.06,
        fontWeight: '600',
        textAlign: 'center',
    },

    search: {
        width:347,
        height:40,
        borderColor: "#989BA5",
        borderWidth: 1,
        borderRadius: 20,
        marginLeft:-15,
        paddingLeft:15,
        color: "#808080",
    },

    subHeadings: {
        color: '#AC5E30',
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'left',
        marginLeft: -20,
        fontFamily: 'Arial',
        marginTop: 13,
    },

    leaders: {
        marginTop: 10,
        marginLeft: 10,
        width:45,
        height: 45,
        backgroundColor: "#FFF",
        borderRadius: 200,
    }
});

export {styles};