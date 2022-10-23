import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './SignUpStyle';
import colors from '../config/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SearchableDropdown from 'react-native-searchable-dropdown';
import TextInputMask from 'react-native-text-input-mask';

// @ts-ignore
export default function SignUp({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pronouns, setPronouns] = useState();
  const [username, setUsername] = useState();
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [about, setAbout] = useState('');
  const [phone, setPhone] = useState();
  const [selectedURI, setSelectedURI] = useState('');

  var items = [
    {
      id: 1,
      name: 'He/Him/His',
    },
    {
      id: 2,
      name: 'She/Her/Hers',
    },
    {
      id: 3,
      name: 'They/Them/Their',
    },
    {
      id: 4,
      name: 'Zie/Zim/Zir',
    },
    {
      id: 5,
      name: 'Sie/Sie/Hir',
    },
    {
      id: 6,
      name: 'Ey/Em/Eir',
    },
    {
      id: 7,
      name: 'Ve/Vir/Vis',
    },
    {
      id: 8,
      name: 'Tey/Tem/Ters',
    },
    {
      id: 9,
      name: 'E/Em/Eir',
    },
    {
      id: 10,
      name: 'Other',
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function signUp(email: any, password: any): void {
    auth()
      .createUserWithEmailAndPassword(email.toString(), password.toString())
      .then(() => {
        console.log('User account signed in!');
        // const users = firestore().collection('users');

        firestore().collection('users').doc(email).set({
          first: first,
          last: last,
          email: email,
          about: about,
          pronouns: pronouns,
          username: username,
          phone: phone,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.overlay}>
        <View style={styles.spaceBetweenRow}>
          {/*<TouchableOpacity
            style={{}}
            onPress={() => {
              let options = {
                storageOptions: {
                  skipBackup: true,
                  path: 'images',
                },
              };
              // @ts-ignore
              ImagePicker.launchImageLibrary(options).then(res => {
                console.log('Response = ', res);
                if (res.didCancel) {
                  console.log('User cancelled image picker');
                } else if (res.error) {
                  console.log('ImagePicker Error: ', res.error);
                } else if (res.customButton) {
                  console.log('User tapped custom button: ', res.customButton);
                } else {
                  // const source = {uri: res.uri};
                  console.log('response', JSON.stringify(res));
                  setSelectedURI(res.uri);
                }
              });

              // ImagePicker.openPicker({
              //   width: Dimensions.get('window').width * 0.25,
              //   height: Dimensions.get('window').width * 0.25,
              //   cropping: true,
              //   cropperCircleOverlay: true,
              // }).then(image => {
              //   // console.log('offset: ' + image.cropRect.x);
              //   // let uri = image.sourceURL.replace('file://', '');
              //
              //   // ImageEditor.cropImage(uri, cropData).then(url => {
              //   //   console.log('Cropped image uri', url);
              //   setSelectedURI(image.sourceURL.replace('file://', ''));
              //   //   // console.log(url);
              //   //   setModalVisible(false);
              //   // });
              // });
            }}>
            <Image
              source={
                selectedURI == ''
                  ? {
                      uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
                    }
                  : {uri: selectedURI}
              }
              style={styles.profilePicture}
            />
          </TouchableOpacity>*/}

          <View style={{marginLeft: Dimensions.get('window').width * -0.03}}>
            <SearchableDropdown
              onItemSelect={item => {
                setPronouns(item.name);
              }}
              // containerStyle={{ padding: 5 }}
              itemStyle={styles.pronounsInputItem}
              itemTextStyle={{color: colors.gray}}
              itemsContainerStyle={{maxHeight: 140}}
              items={items}
              onChangeText={text => setPronouns(text)}
              defaultIndex={0}
              resetValue={false}
              textInputProps={{
                placeholder: 'Pronouns',
                underlineColorAndroid: 'transparent',
                placeholderTextColor: colors.lightGray,
                style: styles.input,
                ref: 'pronouns',
                value: pronouns,
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor={colors.lightGray}
              autoCapitalize="none"
              autoCompleteType="off"
              onChangeText={text => setUsername(text)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.namesInput}
            placeholder="First Name"
            placeholderTextColor={colors.lightGray}
            autoCompleteType="name"
            onChangeText={text => setFirst(text)}
          />

          <View style={styles.spacer} />

          <TextInput
            style={styles.namesInput}
            placeholder="Last Name"
            placeholderTextColor={colors.lightGray}
            autoCompleteType="name"
            onChangeText={text => setLast(text)}
          />
        </View>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={colors.lightGray}
          autoCapitalize="none"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.lightGray}
          autoCapitalize="none"
          autoCompleteType="password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />

        <TextInputMask
          value={phone}
          autoCompleteType="tel"
          onChangeText={phoneNumberFormat => {
            let phoneNumber = phoneNumberFormat.toString().replace(/\D+/g, '');
            setPhone(phoneNumber);
          }}
          type={'cel-phone'}
          maxLength={16}
          options={{
            dddMask: '(999) 999 - ',
          }}
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor={colors.lightGray}
        />

        {/* <View style={styles.roleRow}>
          <Text style={styles.rolePrompt}>I am a </Text>

          <Toggle
            text={{ on: 'MENTOR', off: 'MENTEE', activeTextColor: colors.lightPurple, inactiveTextColor: colors.blue }}
            textStyle={{ fontWeight: 'bold' }}
            color={{ indicator: colors.white, active: colors.blue, inactive: colors.lightPurple, activeBorder: colors.blue, inactiveBorder: colors.lightPurple }}
            active={false}
            disabled={false}
            value={mentor}
            width={80}
            radius={25}
            onValueChange={(val) => {
              setMentor(val)
            }}
          />
        </View> */}

        <View>
          <TextInput
            style={styles.input}
            placeholder="About You"
            placeholderTextColor={colors.lightGray}
            autoCapitalize="sentences"
            value={about}
            multiline={true}
            maxLength={150}
            returnKeyType={'done'}
            blurOnSubmit={true}
            onChangeText={text => setAbout(text)}
          />
          <Text style={styles.charCounter}>{about.length} / 150</Text>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => signUp(email, password)}>
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.noAccountView}>
          <Text style={styles.noAccountText}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.signUpButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
}
