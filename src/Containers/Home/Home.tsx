import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

interface HProps {
  navigation: any;
}

export default function Home(props: HProps) {
  const { navigation } = props;
  const notesVar = [{ note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
   { note: 'Sample Note' }, { note: 'Sample Note' }, { note: 'Sample Note' }, { note: 'Sample Note' }]
  const [notes] = useState(notesVar);

  return (
    <View >
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.container} >
          {
            notesVar.map((res, index) => <Card note={res.note} key={index} />)
          }
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#586366',
    paddingVertical: 14,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
