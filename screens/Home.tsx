import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
// import React from 'react';
import {styles} from './HomeStyle';
import colors from '../config/colors';
import React, {Component} from 'react';
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Home() {
  // @ts-ignore
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.overlay}>
        <Text style={styles.subHeading}>Recommendations</Text>
        <View style={{height: height * 0.3}}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              paddingHorizontal: 5,
            }}>
            <View style={styles.rectangleShapeView}>
              <View style={styles.circle}>
                <View style={styles.bannerHolder}>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>Hispanic</Text>
                  </View>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>Seattle</Text>
                  </View>
                </View>
                <Text style={styles.description}>
                  A community to feel at home for people of Hispanic descent
                  based in Seattle. Feel free to chat with us!
                </Text>
                <TouchableOpacity
                  style={styles.joinButton}
                  onPress={() => {
                    firestore()
                      .collection('users')
                      .doc('shreshthkharbanda1@gmail.com')
                      .update({
                        communities:
                          firestore.FieldValue.arrayUnion('Hispanic'),
                      });
                  }}>
                  <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.boxHeading}>Hispanic in Seattle</Text>
                <Text style={styles.following}>350+ others</Text>
              </View>

              <Text style={styles.year}>2022</Text>
            </View>

            <View style={styles.rectangleShapeView}>
              <View style={styles.circle}>
                <View style={styles.bannerHolder}>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>Women</Text>
                  </View>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>Seattle</Text>
                  </View>
                </View>
                <Text style={styles.description}>
                  A community to feel at home for people of Hispanic descent
                  based in Seattle. Feel free to chat with us!
                </Text>
                <TouchableOpacity
                  style={styles.joinButton}
                  onPress={() => {
                    firestore()
                      .collection('users')
                      .doc('shreshthkharbanda1@gmail.com')
                      .update({
                        communities: firestore.FieldValue.arrayUnion('Women'),
                      });
                  }}>
                  <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.boxHeading}>Women in Seattle</Text>
                <Text style={styles.following}>350+ others</Text>
              </View>

              <Text style={styles.year}>2022</Text>
            </View>

            <View style={styles.rectangleShapeView}>
              <View style={styles.circle}>
                <View style={styles.bannerHolder}>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>LGBTQ+</Text>
                  </View>
                  <View style={styles.banner}>
                    <Text style={styles.BannerType}>Seattle</Text>
                  </View>
                </View>
                <Text style={styles.description}>
                  A community to feel at home for people of Hispanic descent
                  based in Seattle. Feel free to chat with us!
                </Text>
                <TouchableOpacity
                  style={styles.joinButton}
                  onPress={() => {
                    firestore()
                      .collection('users')
                      .doc('shreshthkharbanda1@gmail.com')
                      .update({
                        communities: firestore.FieldValue.arrayUnion('LGBTQ+'),
                      });
                  }}>
                  <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.boxHeading}>LGBTQ+ in Seattle</Text>
                <Text style={styles.following}>350+ others</Text>
              </View>

              <Text style={styles.year}>2022</Text>
            </View>
          </ScrollView>
        </View>

        <Text style={styles.subHeading}>Your communities</Text>

        <TouchableOpacity style={styles.communityBox}>
          <View style={styles.communityCircle} />
          <View style={{marginRight: 30}}>
            <Text style={styles.communityHeading}>Hispanic in Tech</Text>
            <Text style={styles.following}>You and 650+ others</Text>
          </View>
          <Text style={styles.year}>2021</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.communityBox}>
          <View style={styles.communityCircle} />
          <View>
            <Text style={styles.communityHeading}>Mexicans Overseas</Text>
            <Text style={styles.following}>You and 130000+ others</Text>
          </View>
          <Text style={styles.year}>2020</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.communityBox}>
          <View style={styles.communityCircle} />
          <View style={{marginRight: -20}}>
            <Text style={styles.communityHeading}>Arabian Finance Bros</Text>
            <Text style={styles.following}>You and 230+ others</Text>
          </View>
          <Text style={styles.year}>2018</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
