import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../Componentes/game/NumberContainer";
import PrimaryButton from "../Componentes/ui/PrimaryButton";
import Title from "../Componentes/ui/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxboundary = 100;
function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if (direction === 'lower') {
            maxboundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(
            minBoundary,
            maxboundary,
            currentGuess
        );
        setCurrentGuess(newRandomNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower ?</Text>
            </View>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
            </View>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        padding: 24,
        marginTop: 30,
    },
})