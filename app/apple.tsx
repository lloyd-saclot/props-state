import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Apple() {
  const router = useRouter();  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07ed52f9-65de-4d91-afc1-6d9594f0de81/dhfa9jn-d9d41de6-87f7-418c-a00c-ca7da274976c.png/v1/fill/w_462,h_468,q_80,strp/the_mysterious_apple___cursed_image_photo____by_mrorlandomagicfan200_dhfa9jn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDY4IiwicGF0aCI6IlwvZlwvMDdlZDUyZjktNjVkZS00ZDkxLWFmYzEtNmQ5NTk0ZjBkZTgxXC9kaGZhOWpuLWQ5ZDQxZGU2LTg3ZjctNDE4Yy1hMDBjLWNhN2RhMjc0OTc2Yy5wbmciLCJ3aWR0aCI6Ijw9NDYyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.W8dYZMI0VX9i8dLGl_MxFvweA5UgyVdWsE5hOTCk3r8' }} style={styles.image} />
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