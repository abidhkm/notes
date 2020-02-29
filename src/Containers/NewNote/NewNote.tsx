import React, { useState,useContext } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Platform,
    ToastAndroid,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../../../App';


interface HProps {
    navigation: any;
}

export default function NewNote(props: HProps) {

    const [value, setValue] = useState('')
    const {notes,setNotes} = useContext(AppContext)

    const handleOnSave = () => {
        if(value.length>3) {
            if(notes.length === 1 && notes[0].note === '') {
                setNotes([{note:value}])
            } else {
                setNotes([...notes,{note:value}]);
            }
            setValue('');
            props.navigation.navigate('Home');
        }else {
            if (Platform.OS === 'android') {
                ToastAndroid.show('Atleast 3 characters needed', ToastAndroid.SHORT)
              } 
        }
    };

    return (
        <View style={styles.container} >
            <View style={styles.backBtn} >
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} >
                    <Ionicons name="md-arrow-back" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.container1} >
                <TextInput
                    multiline

                    numberOfLines={40}
                    style={styles.input}
                    onChangeText={text => setValue(text)}
                    value={value}
                />
                <Button title="Save" onPress={handleOnSave} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backBtn:{
        paddingHorizontal:5
    },
    container1: {
        paddingTop: 10,
    },
    input: {
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        color: '#fff',
        textAlignVertical: 'top',
        height: '70%', borderColor: 'gray', borderWidth: 1
    },
    container: {
        paddingVertical: 30,
        backgroundColor: '#586366',
        paddingHorizontal: 10,
        flex: 1,
    },
});
