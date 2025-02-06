import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Increment from '../components/increment';
import Decrement from '../components/decrement';

const Lab3: React.FC = () => {
    const [value, setValue] = useState(0);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>Counter: {value}</Text>
            <Increment value={value} setValue={setValue} />
            <Decrement value={value} setValue={setValue} />
            <Button title="Back to Home" onPress={() => router.push('/')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default Lab3;