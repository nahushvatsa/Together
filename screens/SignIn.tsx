import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './SignInStyle';
import colors from '../config/colors';
import auth from '@react-native-firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function signIn(email: any, password: any): void {
    auth()
      .signInWithEmailAndPassword(email.toString(), password.toString())
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <TextInput
            style={styles.input}
            placeholder="E-Mail"
            placeholderTextColor={colors.lightGray}
            autoCapitalize="none"
            // autoCompleteType="email"
            value={email}
            onChangeText={text => setEmail(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.lightGray}
            // autoCompleteType="password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => signIn(email, password)}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotPwd}
            // onPress={() => setModalVisible(true)}
          >
            <Text style={styles.forgotPwd}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
