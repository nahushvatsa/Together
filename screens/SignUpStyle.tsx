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
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    color: primary,
    marginTop: height * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    color: secondary,
    marginTop: height * 0.02,
    fontWeight: '200',
    textAlign: 'center',
  },
  charCounter: {
    fontSize: 17,
    color: inputColor,
    marginTop: height * 0.005,
    fontWeight: '200',
    textAlign: 'center',
  },
  itemText: {
    fontSize: 15,
    color: "#000",
    fontWeight: '400',
    textAlign: 'center',
  },
  namesInput: {
    borderWidth: 1,
    borderColor: "#AC5E30",
    borderRadius: 3,
    width: width * 0.4,
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    marginTop: height * 0.015,
    color: inputColor,
    fontWeight: '700',
  },
  pronounsInput: {
    borderWidth: 1,
    borderColor: "#AC5E30",
    borderRadius: 3,
    width: width * 0.85,
    alignSelf: 'center',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.015,
    marginTop: height * 0.015,
    color: inputColor,
    fontWeight: '700',
  },
  pronounsInputItem: {
    borderWidth: 1,
    borderColor: "#AC5E30",
    borderRadius: 3,
    width: width * 0.85,
    alignSelf: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.01,
    color: inputColor,
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginHorizontal: width * 0.1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#AC5E30",
    borderRadius: 3,
    width: width * 0.85,
    alignSelf: 'center',
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.015,
    marginTop: height * 0.015,
    color: inputColor,
    fontWeight: '700',
  },
  spacer: {
    width: width * 0.05,
  },
  dropdownSpacer: {
    width: width * 0.01,
  },
  dropdown: {
    width: width * 0.3,
  },
  fullWidthDropdown: {
    width: width * 0.85,
    alignSelf: 'center',
    color: inputColor,
    fontWeight: '700',
  },
  item: {
    color: "#AC5E30",
  },
  rolePrompt: {
    fontSize: 18,
    color: inputColor,
    marginTop: height * 0.015,
    paddingRight: width * 0.03,
  },
  roleRow: {
    flexDirection: 'row',
    marginTop: height * 0.015,
    marginBottom: height * 0.01,
    alignSelf: 'center',
  },
  signUpButton: {
    backgroundColor: "#AC5E30",
    color: primary,
    borderRadius: height * 0.03,
    marginTop: -height * 0.01,
    width: width * 0.3,
    marginLeft: width * 0.05,
  },
  signInButton: {
    backgroundColor: "#AC5E30",
    color: primary,
    marginTop: height * 0.015,
    borderRadius: height * 0.05,
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
  signUpButtonText: {
    fontSize: 12,
    color: primary,
    margin: height * 0.015,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rememberMeView: {
    flexDirection: 'row',
    marginLeft: width * 0.08,
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
    marginTop: height * 0.005,
    marginLeft: width * 0.08,
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
  tncConsentLabel: {
    marginHorizontal: width * 0.03,
    marginTop: height * 0.012,
    color: inputColor,
    fontSize: width * 0.03,
    fontWeight: '600',
  },
  tncLabel: {
    color: colors.googleBlue,
    fontSize: width * 0.035,
    marginTop: height * 0.005,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  orElseView: {
    marginTop: height * 0.01,
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
    backgroundColor: primary,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100,
    marginTop: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 'auto',
  },
  signInWithGoogle: {
    width: width * 0.16,
    height: width * 0.16,
    backgroundColor: colors.googleBlue,
    borderRadius: width * 0.1,
    flexDirection: 'row',
    marginRight: width * 0.18,
  },
  signInWithApple: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: width * 0.1,
    flexDirection: 'row',
    backgroundColor: secondary,
    marginRight: width * 0.18,
  },
  signInWithFacebook: {
    backgroundColor: colors.facebookBlue,
    width: width * 0.16,
    height: width * 0.16,
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
  signInWithRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: width * 0.07,
    // alignContent: 'space-around'
    marginTop: height * 0.015,
  },
  profilePicture: {
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: width * 0.13,
    borderWidth: width * 0.002,
    borderColor: "#AC5E30",
    marginTop: height * 0.01,
  },
  avatar: {
    height: width * 0.2,
    width: width * 0.2,
    borderRadius: width * 0.2,
    marginTop: height * 0.01,
  },
  modalNotNow: {
    fontSize: 12,
    color: colors.blue,
    margin: height * 0.02,
    fontWeight: '700',
    textAlign: 'center',
  },
  modalResetPass: {
    borderColor: "#AC5E30",
    color: primary,
    borderRadius: height * 0.08,
    marginTop: height * 0.03,
    width: width * 0.33,
    marginLeft: width * 0.05,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: primary,
    borderRadius: 30,
    alignItems: 'center',
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingVertical: height * 0.03,
  },
  closeIcon: {
    color: secondary,
    alignSelf: 'flex-end',
  },
  modalTitle: {
    fontSize: 30,
    color: secondary,
    fontWeight: '200',
    textAlign: 'center',
  },
  loadingTitle: {
    fontSize: 30,
    color: secondary,
    // marginTop: -height * 0.06,
    fontWeight: '200',
    textAlign: 'center',
  },
});
export {styles};
