import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

const cols = 2;
const marginHorizontal = 3;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));

interface CVariable {
    note: string
}

export default function Card({ note }: CVariable) {
    return (
        <View style={styles.boxContainer}>
            <Text style={styles.note} numberOfLines={11}  ellipsizeMode="tail" > {note} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    note: {
        color: 'white'
    },
    boxContainer: {
        overflow:'hidden',
        marginTop: marginVertical,
        marginBottom: marginVertical,
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        width: width,
        height: 200,
        padding:5,
        borderWidth: 1,
        borderColor: 'rgb(177, 185, 187)',
        borderRadius: 10
    },
});
