import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function GameOverScreen({ onRestart }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Over</Text>
      <View style={styles.buttonContainer}>
        <Button title="Try Again" onPress={onRestart} color="#FF4500" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333', // Solid background color
  },
  title: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#FF4500', // Bright accent color for contrast
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '60%',
  },
});
