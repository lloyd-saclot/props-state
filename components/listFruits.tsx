import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const fruits = ['Apple', 'Orange', 'Mango'];

export default function ListFruits() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {fruits.map((fruit, index) => (
        <TouchableOpacity key={index} onPress={() => router.push(`/${fruit.toLowerCase()}`)}>
          <Text style={styles.item}>{fruit}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});