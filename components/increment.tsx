import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type IncrementProps = { value: number; setValue: (value: number) => void };

const Increment: React.FC<IncrementProps> = ({ value, setValue }) => {
    const handleIncrement = () => {
        setValue(value + 1);
    };

    return (
        <View style={styles.box}>
            <TouchableOpacity onPress={handleIncrement} style={styles.button}>
                <Text style={styles.text}>Increment</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default Increment;