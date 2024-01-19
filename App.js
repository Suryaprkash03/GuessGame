import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import GameoverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameSreen';
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  function PickedNumberHandler(pickednumber) {
    setUserNumber(pickednumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onPickNumber={PickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameoverScreen />
  }


  return (
    <LinearGradient colors={['#ABEBC6', '#ABEBC6', '#45B39D']} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.jpg')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.ImageBack}
      >
        {screen}
      </ImageBackground>


    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  rootScreen: {
    backgroundColor: '#A2D9CE',
    flex: 1,
  },
  ImageBack: {
    opacity: 0.15,
  }
});
