import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {AppContext} from '../../../App'

interface HProps {
  navigation: any;
}

export default function Home(props: HProps) {
  const { navigation } = props;
  const {notes} = useContext(AppContext)

  return (
    <View  style={styles.wrapper}>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container} >
          {
            notes.map((res, index) => <Card note={res.note} key={index} />)
          }
        </View>
      </ScrollView>
      <View style={styles.newNoteBtn} >
      <TouchableOpacity onPress={()=>navigation.navigate('NewNote')} >
        <Ionicons name="md-add-circle" size={70} color="rgb(60, 57, 56)" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    backgroundColor: '#586366',
  },
  newNoteBtn:{
    position:'absolute',
    right:10,
    bottom:10
  },
  container: {
    paddingVertical: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
