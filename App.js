import { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Correct import for LinearGradient
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);

  function pickedNumberHandler(response) {
    setPickedNumber(response);
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler} />; // Pass pickedNumberHandler

  if (pickedNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
     
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
