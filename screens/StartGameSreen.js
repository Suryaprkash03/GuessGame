import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../Componentes/PrimaryButton";

function StartGameScreen() {
    return (
        <View style={styles.Inputcontainer}>
            <TextInput style={styles.NumberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize="none"
                autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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