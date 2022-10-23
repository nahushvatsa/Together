import {Dimensions, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home() {
  return (
    <View
      style={{
        backgroundColor: '#03045E',
        flex: 1,
        flexDirection: 'column',
        paddingTop: height * 0.06,
      }}>
      <Text
        style={{
          flex: 1,
          color: '#FFF',
          fontSize: 30,
          fontWeight: '400',
          textAlign: 'center',
        }}>
        Home
      </Text>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          left: 0,
          marginTop: height * 0.12,
          backgroundColor: '#FFF',
          borderRadius: width * 0.1,
          height: height,
          width: width,
          paddingHorizontal: width * 0.05,
          paddingTop: height * 0.02,
          flexDirection: 'column',
        }}
      />


    </View>
  );
}
