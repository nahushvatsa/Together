import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './DiscoverStyle';
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = ({title, Banner1, Banner2, description, people}) => (
  // <View
  //   style={{
  //     backgroundColor: '#f9c2ff',
  //     padding: 20,
  //     marginVertical: 8,
  //     marginHorizontal: 16,
  //   }}>
  //   <Text
  //     style={{
  //       fontSize: 32,
  //     }}>
  //     {title}
  //   </Text>
  // </View>

  <View style={styles.rectangleShapeView}>
    <View style={styles.circle}>
      <View style={styles.bannerHolder}>
        <View style={styles.banner}>
          <Text style={styles.BannerType}>{Banner1}</Text>
        </View>
        <View style={styles.banner}>
          <Text style={styles.BannerType}>{Banner2}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
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
      <Text style={styles.boxHeading}>{title}</Text>
      <Text style={styles.following}>{people}</Text>
    </View>
  </View>
);

let data = [
  {
    id: '1',
    title: 'Hispanic in Tech',
    Banner1: 'Hispanic',
    Banner2: 'Tech',
    description:
      'We are a group of hispanics passionate about working in technology.',
    people: '350+ Members',
  },
  {
    id: '2',
    title: 'Mexicans Overseas',
    Banner1: 'Mexican',
    Banner2: 'Overseas',
    description: 'We are a group of international mexicans.',
    people: '250+ Members',
  },
  {
    id: '3',
    title: 'Arabian Finance Bros',
    Banner1: 'Arabian',
    Banner2: 'Finance',
    description:
      'We are a group of arabs who are interested in the financial industry.',
    people: '200+ Members',
  },
  {
    id: '4',
    title: 'Women in STEM',
    Banner1: 'Women',
    Banner2: 'STEM',
    description:
      'We are a group of Women who are interested in empowering women to be involved in STEM.',
    people: '300+ Members',
  },
  {
    id: '5',
    title: 'Mexicans Overseas',
    Banner1: 'Mexican',
    Banner2: 'Overseas',
    description: 'We are a group of international mexicans.',
    people: '250+ Members',
  },
  {
    id: '6',
    title: 'Hispanic in Tech',
    Banner1: 'Hispanic',
    Banner2: 'Tech',
    description:
      'We are a group of hispanics passionate about working in technology.',
    people: '350+ Members',
  },
];

export default function Discover({navigation}) {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      Banner1={item.Banner1}
      Banner2={item.Banner2}
      description={item.description}
      people={item.people}
    />
  );

  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover Groups</Text>
      <View style={styles.overlay}>
        <TextInput
          style={styles.search}
          placeholder={'Search for Communities'}
          value={search}
          onChangeText={s => {
            setSearch(s);
            if (s.length > 0) {
              data = data
                .filter(function (item) {
                  return item.title.includes(s);
                })
                .map(function ({
                  id,
                  title,
                  Banner1,
                  Banner2,
                  description,
                  people,
                }) {
                  return {id, title, Banner1, Banner2, description, people};
                });
            } else {
              data = [
                {
                  id: '1',
                  title: 'Hispanic in Tech',
                  Banner1: 'Hispanic',
                  Banner2: 'Tech',
                  description:
                    'We are a group of hispanics passionate about working in technology.',
                  people: '350+ Members',
                },
                {
                  id: '2',
                  title: 'Mexicans Overseas',
                  Banner1: 'Mexican',
                  Banner2: 'Overseas',
                  description: 'We are a group of international mexicans.',
                  people: '250+ Members',
                },
                {
                  id: '3',
                  title: 'Arabian Finance Bros',
                  Banner1: 'Arabian',
                  Banner2: 'Finance',
                  description:
                    'We are a group of arabs who are interested in the financial industry.',
                  people: '200+ Members',
                },
                {
                  id: '4',
                  title: 'Women in STEM',
                  Banner1: 'Women',
                  Banner2: 'STEM',
                  description:
                    'We are a group of Women who are interested in empowering women to be involved in STEM.',
                  people: '300+ Members',
                },
                {
                  id: '5',
                  title: 'Mexicans Overseas',
                  Banner1: 'Mexican',
                  Banner2: 'Overseas',
                  description: 'We are a group of international mexicans.',
                  people: '250+ Members',
                },
                {
                  id: '6',
                  title: 'Hispanic in Tech',
                  Banner1: 'Hispanic',
                  Banner2: 'Tech',
                  description:
                    'We are a group of hispanics passionate about working in technology.',
                  people: '350+ Members',
                },
              ];
            }
          }}
        />

        <View style={{height: height * 0.7}}>
          <ScrollView>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              extraData={data}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
