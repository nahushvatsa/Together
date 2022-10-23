import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import colors from '../config/colors';
const primary = "#fce0c7";
const secondary = colors.black;
const inputColor = colors.gray;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AC5E30",
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
    fontSize: 30,
    color: primary,
    marginTop: height * 0.06,
    fontWeight: '200',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "#AC5E30",
    borderRadius: 2,
    width: width * 0.8,
    alignSelf: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    marginTop: height * 0.015,
    color: inputColor,
    fontWeight: '700',
  },
  forgotPwd: {
    color: "#000",
    marginVertical: 5,
    fontSize: 12,
    fontWeight: '700',
    alignSelf: 'flex-end',
  },
  signInButton: {
    backgroundColor: "#AC5E30",
    color: primary,
    marginTop: height * 0.015,
    borderRadius: height * 0.01,
    width: width * 0.9,
    alignSelf: 'center',
  },
  signInButtonText: {
    fontSize: 15,
    color: primary,
    margin: height * 0.025,
    fontWeight: '400',
    textAlign: 'center',
  },
  noAccountView: {
    flexDirection: 'row',
    marginTop: height * 0.025,
    // marginLeft: -width * 0.05,
    alignSelf: 'center',
  },
  noAccountText: {
    fontSize: 18,
    color: "#000",
  },
  signUpButton: {
    backgroundColor: "#AC5E30",
    color: primary,
    borderRadius: height * 0.01,
    marginTop: -height * 0.01,
    width: width * 0.3,
    marginLeft: width * 0.05,
  },
  signUpButtonText: {
    fontSize: 12,
    color: primary,
    margin: height * 0.015,
    fontWeight: '400',
    textAlign: 'center',
  },
  rememberMeView: {
    flexDirection: 'row',
  },
  rememberMeLabel: {
    marginHorizontal: width * 0.03,
    marginTop: height * 0.008,
    color: inputColor,
    fontSize: width * 0.033,
    fontWeight: '600',
  },
  consentView: {
    flexDirection: 'row',
  },
  consentCheckbox: {
    marginTop: height * 0.015,
  },
  consentLabel: {
    marginHorizontal: width * 0.03,
    marginTop: height * 0.025,
    color: inputColor,
    fontSize: width * 0.03,
    fontWeight: '600',
  },
  orElseView: {
    marginTop: height * 0.02,
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: inputColor,
  },
  orElseText: {
    width: width * 0.45,
    textAlign: 'center',
    color: inputColor,
  },
  logoView: {
    marginLeft: width * 0.05,
    backgroundColor: primary,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100,
  },
  signInWithGoogle: {
    width: width * 0.8,
    marginTop: height * 0.015,
    paddingVertical: height * 0.015,
    // marginRight: width*0.1,
    backgroundColor: colors.googleBlue,
    borderRadius: width * 0.1,
    flexDirection: 'row',
  },
  signInWithApple: {
    width: width * 0.8,
    marginTop: height * 0.015,
    paddingVertical: height * 0.015,
    // marginRight: width*0.1,
    backgroundColor: secondary,
    borderRadius: width * 0.1,
    flexDirection: 'row',
  },
  signInWithFacebook: {
    width: width * 0.8,
    marginTop: height * 0.015,
    paddingVertical: height * 0.015,
    // marginRight: width*0.1,
    backgroundColor: colors.facebookBlue,
    borderRadius: width * 0.1,
    flexDirection: 'row',
  },
  logo: {
    width: width * 0.08,
    height: width * 0.08,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
  loginWithText: {
    marginLeft: width * 0.07,
    fontSize: 17,
    color: primary,
    marginVertical: height * 0.01,
    fontWeight: '400',
    textAlign: 'center',
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },

  modalNotNow: {
    fontSize: 12,
    color: colors.blue,
    margin: height * 0.02,
    fontWeight: '700',
    textAlign: 'center',
  },

  modalResetPass: {
    backgroundColor: colors.blue,
    color: primary,
    borderRadius: height * 0.08,
    marginTop: height * 0.03,
    width: width * 0.5,
    marginLeft: width * 0.05,
  },

  modalView: {
    margin: 20,
    backgroundColor: primary,
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: 'center',
  },
  closeIcon: {
    color: secondary,
    alignSelf: 'flex-end',
  },
  forgotPasswordTitle: {
    fontSize: 30,
    color: secondary,
    fontWeight: '200',
    textAlign: 'center',
  },
  forgotPasswordDescription: {
    fontSize: 15,
    color: secondary,
    fontWeight: '200',
    textAlign: 'center',
  },
});
export {styles};
