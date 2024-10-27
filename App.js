import { useState } from 'react';
import { StyleSheet, ImageBackground, View, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameOver, sGameOver] = useState(false); // Set gameOver to false initially

  function pickedNumberHandler(response) {
    setPickedNumber(response);
    sGameOver(false);
  }

  function gameOverHandler() {
    sGameOver(true);
  }

  function restartHandler(){
    screen = <StartGameScreen />
    sGameOver(false)
    setPickedNumber(null)
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler} />;

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />;
  }

  if (gameOver) {
    screen = <GameOverScreen onRestart={restartHandler}/>;
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
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
});
