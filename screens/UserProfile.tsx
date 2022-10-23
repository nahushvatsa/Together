import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './UserProfileStyle';
import colors from '../config/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import TextInputMask from 'react-native-text-input-mask';
const {width, height} = Dimensions.get('window');

// @ts-ignore
export default function UserProfile({navigation}) {
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

        firestore()
          .collection('users')
          .doc(email)
          .set({
            first: first,
            last: last,
            email: email,
            about: about,
            pronouns: pronouns,
            username: username,
            phone: phone,
          })
          .then(() => navigation.navigate('UserProfile'));
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.overlay}>
        <Image
          source={{
            uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
          }}
          style={styles.profilePicture}
        />

        <View style={styles.spaceBetweenRow}>
          <Text style={styles.titleName}>Shreshth Kharbanda</Text>
        </View>
        <View style={styles.spaceBetweenRow}>
          <Text style={{fontSize: 15, fontWeight: "bold", marginLeft: width * 0.27,}}>(He/Him/His) {"\n"}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.bannerHolder}>
            <View
              style={{
                height: height * 0.02,
                width: width * 0.35,
                backgroundColor: '#e39364',
                borderRadius: 20,
                paddingHorizontal: 20,
                marginRight: 25,
              }}>
              <Text style={styles.BannerType}>Person of Color</Text>
            </View>
            <View style={styles.banner}>
              <Text style={styles.BannerType}>Academics</Text>
            </View>
          </View>
        </View>

        <Text style={styles.subTitle}>
          {"\n"}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );
}
