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
import {styles} from "./ChatStyle";
import firestore from "@react-native-firebase/firestore";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Item = ({name, message, pronouns}) => (
            <View style={styles.chatBox}>
                <View style={styles.chatIcon}></View>
                <View style={{marginRight:30}}><Text style={styles.name}>{name}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <Text style={styles.pronouns}>{pronouns}</Text>
            </View>
);


let data = [
    {
        id: '1',
        name: 'Sid Varanasi',
        message: 'This is a message preview',
        pronouns: "(He/Him/His)"
    },
    {
        id: '2',
        name: 'Lauren Smith',
        message: 'This is a message preview',
        pronouns: "(She/Hers/Hers)"
    },
    {
        id: '3',
        name: 'Jack Harlow',
        message: 'This is a message preview',
        pronouns: "(He/Him/His)"
    },
];

export default function Chat({navigation}) {
    const renderItem = ({item}) => (
        <Item
            name={item.name}
            message={item.message}
        />
    );

    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat</Text>
            <View style={styles.overlay}>
                <TextInput
                    style={styles.search}
                    placeholder={'Search for Chats'}
                    value={search}
                    onChangeText={s => {
                        setSearch(s);
                        if (s.length > 0) {
                            data = data
                                .filter(function (item) {
                                    return item.name.includes(s);
                                })
                                .map(function ({
                                                   id,
                                                   name,
                                                   message,
                                                   pronouns,
                                               }) {
                                    return {name, message, pronouns};
                                });
                        } else {
                            data = [
                                {
                                    id: '1',
                                    name: 'Sid Varanasi',
                                    message: 'This is a message preview',
                                    pronouns: "(He/Him/His)"
                                },
                                {
                                    id: '2',
                                    name: 'Lauren Smith',
                                    message: 'This is a message preview',
                                    pronouns: "(She/Hers/Hers)"
                                },
                                {
                                    id: '3',
                                    name: 'Jack Harlow',
                                    message: 'This is a message preview',
                                    pronouns: "(He/Him/His)"
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