import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ListFruits from '../components/listFruits';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the App!</Text>
      <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
      <ListFruits />
      <Button title="Go to Lab 3" onPress={() => router.push('/lab3')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    paddingTop: 90,
  },
});