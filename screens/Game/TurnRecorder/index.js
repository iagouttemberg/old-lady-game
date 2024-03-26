import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TurnRecorder = ({ playerName }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${playerName}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: 'Black',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default TurnRecorder;