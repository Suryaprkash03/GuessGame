import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameSreen';
export default function App() {
  return (
    <LinearGradient colors={['#ABEBC6','#ABEBC6','#45B39D']}style={styles.rootScreen}>
      <ImageBackground source={require('./assets/Images/background.jpg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.ImageBack}
      >
      <StartGameScreen />
      </ImageBackground>

      
    </LinearGradient>

  );
}

const styles = StyleSheet.create({

  rootScreen: {
    backgroundColor: '#A2D9CE',
    flex: 1,
  },
  ImageBack:{
    opacity:0.15,
  }
});
