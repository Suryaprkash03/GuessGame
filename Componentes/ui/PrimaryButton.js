import { Pressable, StyleSheet, Text, View } from "react-native";

function PrimaryButton ({children, onPress})
{
    return(
        <View style={styles.buttonOuterContainer}>
  <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color:'#48C9B0' }}
      >
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
        color:'white',
        textAlign:'center',
        fontSize:18,

    },
    buttonOuterContainer :{
        borderRadius:8,
        margin:4,
        overflow:'hidden',
    },
    pressed: {
        opacity: 0.75,
      },

})