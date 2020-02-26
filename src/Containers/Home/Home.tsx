import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../../components/Header/Header';

interface HProps {
  navigation: any;
}

export default function Home(props: HProps) {
  const { navigation } = props;


  return (
    
      <View style={styles.container}>
        <Header navigation={navigation} />
        <Text>Home</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
