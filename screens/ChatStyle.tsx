import {StyleSheet} from 'react-native';
import {Dimensions, Alert} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../../config/colors';

import {Appearance} from 'react-native';
const colorScheme = Appearance.getColorScheme();
const primary = colorScheme === 'light' ? colors.white : colors.black;
const secondary = colorScheme === 'light' ? colors.black : colors.white;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
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
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
  },
  title: {
    fontSize: 30,
    color: primary,
    marginTop: height * 0.06,
    fontWeight: '200',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightPurple,
    borderRadius: 12,
    width: width * 0.8,
    alignSelf: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    marginTop: height * 0.015,
    color: colors.gray,
    fontWeight: '700',
  },
  signInButton: {
    backgroundColor: colors.purple,
    color: primary,
    marginTop: height * 0.015,
    borderRadius: height * 0.05,
    width: width * 0.4,
    alignSelf: 'center',
  },
  signInButtonText: {
    fontSize: 15,
    color: primary,
    margin: height * 0.025,
    fontWeight: '400',
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: secondary,
    color: colors.purple,
    marginTop: height * 0.015,
    borderRadius: height * 0.05,
    width: width * 0.8,
    alignSelf: 'center',
  },
  signUpButtonText: {
    fontSize: 15,
    color: primary,
    margin: height * 0.025,
    fontWeight: '400',
    textAlign: 'center',
  },
  profilePicture: {
    height: width * 0.17,
    width: width * 0.17,
    borderRadius: width * 0.13,
    borderWidth: width * 0.002,
    marginRight: width * 0.05,
    marginTop: height * 0.04,
    borderColor: colors.purple,
    alignSelf: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalNotNow: {
    fontSize: 12,
    color: colors.purple,
    fontWeight: '700',
    textAlign: 'center',
  },
  modalResetPass: {
    backgroundColor: colors.purple,
    color: primary,
    borderRadius: height * 0.08,
    marginTop: height * 0.03,
    width: width * 0.5,
    marginLeft: width * 0.05,
  },
  modalView: {
    backgroundColor: primary,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 35,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: secondary,
    marginTop: height * 0.02,
    fontWeight: '200',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 40,
    color: secondary,
    fontWeight: '500',
    textAlign: 'center',
  },
  emptyListTitle: {
    fontSize: 30,
    color: colors.purple,
    marginTop: height * 0.05,
    fontWeight: '200',
    textAlign: 'center',
  },
  emptyListButton: {
    backgroundColor: colors.purple,
    // color: colors.purple,
    borderRadius: height * 0.03,
    width: width * 0.6,
    padding: width * 0.01,
    alignSelf: 'center',
    marginTop: height * 0.01,
  },
  emptyListButtonText: {
    fontSize: 22,
    color: primary,
    margin: height * 0.01,
    fontWeight: '300',
    textAlign: 'center',
  },
});
export {styles};
