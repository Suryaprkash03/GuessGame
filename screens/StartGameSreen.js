import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../Componentes/ui/PrimaryButton";
import Title from "../Componentes/ui/Title";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnterednumber] = useState('');


    function numberInputHandler(enteredText) {
        setEnterednumber(enteredText);
    }

    function resetInputHandler() {
        setEnterednumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert...
            Alert.alert('Invalid Number!!',
                'Number Does in Between 1 to 99',
                [{
                    text: 'Okey', style: 'destructive',
                    onPress: resetInputHandler
                }]);
            return;
        }
        onPickNumber(chosenNumber);
    }

    return (
        <View>
            <Title>Guess My Number</Title>
            <View style={styles.Inputcontainer}>
                <TextInput style={styles.NumberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    Inputcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginHorizontal: 25,
        padding: 16,
        backgroundColor: '#45B39D',
        borderRadius: 10,
        elevation: 10,
    },
    NumberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})