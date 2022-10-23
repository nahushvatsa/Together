import {StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../config/colors';
import React, {Component} from 'react';

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
    width: 347,
    height: 40,
    borderColor: '#989BA5',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: -15,
    paddingLeft: 15,
    color: '#808080',
  },

  subHeadings: {
    color: '#AC5E30',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: -20,
    fontFamily: 'Arial',
    marginTop: 13,
  },

  leaders: {
    marginTop: 10,
    marginLeft: 10,
    width: 45,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 200,
  },
  rectangleShapeView: {
    marginTop: 10,
    marginLeft: 15,
    width: 260,
    height: 150,
    backgroundColor: '#fce0c7',
    borderRadius: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
    borderColor: '#000000',
    shadowOpacity: 0.6,
    shadowRadius: 3.0,
    // elevation: 24,
    shadowOffset: {height: 6, width: 0},
  },

  circle: {
    marginTop: 10,
    marginLeft: 10,
    width: 45,
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 200,
  },

  boxHeading: {
    marginTop: 15,
    marginLeft: 10,
    fontFamily: 'Arial',
    fontSize: 15,
    fontWeight: 'bold',
  },

  year: {
    textAlign: 'right',
    marginLeft: 25,
    marginTop: 19,
    fontSize: 9,
    fontWeight: '300',
    paddingRight: 5,
  },

  bannerHolder: {
    width: 240,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 13,
    marginBottom: 55,
  },

  banner: {
    height: 11,
    width: 39,
    marginTop: 55,
    marginLeft: 7,
    backgroundColor: '#e39364',
    borderRadius: 20,
  },

  BannerType: {
    fontSize: 7,
    textAlign: 'center',
    marginTop: 1,
    marginLeft: 2,
    marginRight: 4,
    fontWeight: '600',
  },

  description: {
    fontSize: 10,
    marginTop: 5,
    flexWrap: 'wrap',
    width: 240,
    marginRight: 15,
    fontWeight: '600',
  },

  joinButton: {
    width: 163,
    height: 22,
    marginTop: 10,
    marginLeft: 39,
    borderRadius: 20,
    backgroundColor: '#AC5E30',
  },

  joinText: {
    textAlign: 'center',
    marginTop: 2,
    fontSize: 15,
    fontWeight: '600',
    color: '#fce0c7',
  },

  following: {
    marginLeft: 10,
    fontSize: 12.5,
    fontFamily: 'Arial',
    marginTop: 5,
  },

  communityBox: {
    width: 350,
    height: 60,
    backgroundColor: '#fce0c7',
    marginLeft: -20,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: '#000000',
    shadowOpacity: 0.5,
    shadowRadius: 16.0,
    elevation: 24,
    shadowOffset: {height: 4, width: 0},
  },

  communityHeading: {
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 30,
  },

  communityCircle: {
    marginTop: 5,
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 200,
  },
});

export {styles};
