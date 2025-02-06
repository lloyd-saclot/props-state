import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Orange() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image source={{ uri: 'https://i.pinimg.com/736x/85/c2/c9/85c2c922c539e08f88006ec36bff0100.jpg' }} style={styles.image} />
      <Button title="Go Back" onPress={() => router.push('/')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
});