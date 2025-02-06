import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

type DecrementProps = { value: number; setValue: (value: number) => void };

const Decrement: React.FC<DecrementProps> = ({ value, setValue }) => {
    const handleDecrement = () => {
        setValue(value - 1);
    };

    return (
        <View style={styles.box}>
            <TouchableOpacity onPress={handleDecrement} style={styles.button}>
                <Text style={styles.text}>Decrement</Text>
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
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default Decrement;