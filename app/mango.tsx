import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Mango() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mango</Text>
      <Image source={{ uri: 'https://i.pinimg.com/564x/e9/45/5c/e9455cbd941148d7e72b759ac05d0ddd.jpg' }} style={styles.image} />
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