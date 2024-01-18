import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton ({children})
{
    function PressHandler ()
    {
        console.log('pressed');
    }
    return(
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={PressHandler}
            style={styles.buttonInnercontainer}
            android_ripple={{color:'#D0D3D4'}}>
            <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;

const styles=StyleSheet.create({

    buttonInnercontainer :{
        backgroundColor:'#FBFCFC',
        paddingVertical:8,
        paddingHorizontal:16,
        elevation:2,
    },

    buttonText :{
        color:'black',
        textAlign:'center',
        fontSize:18,
    },
    buttonOuterContainer :{
        borderRadius:8,
        margin:4,
        overflow:'hidden',
    },

})