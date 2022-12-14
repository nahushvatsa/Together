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

  chatBox: {
    width:300,
    height:60,
    backgroundColor: '#fce0c7',
    marginLeft: 5,
    marginTop:20,
    marginBottom:5,
    borderRadius:15,
    flexDirection: "row",
    flexWrap: "wrap",
    borderColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 3.0,
    // elevation: 24,
    shadowOffset: {height: 6, width: 0},
  },

  name: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: "bold",
    marginRight:30,
  },

  message: {
    marginLeft: 10,
    fontSize: 12.5,
    fontFamily: "Arial",
    marginTop: 5,

  },

  chatIcon: {
    marginTop: 5,
    marginLeft: 10,
    width:50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 200,
  },

  pronouns: {
    //textAlign: "right",
    //marginLeft: 25,
    marginTop: 19,
    fontSize: 9,
    fontWeight: "300",
    //paddingRight: 5,
  },

  search: {
    width: 350,
    height: 40,
    borderColor: '#989BA5',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: -15,
    paddingLeft: 15,
    color: '#808080',
  },
});

export {styles};