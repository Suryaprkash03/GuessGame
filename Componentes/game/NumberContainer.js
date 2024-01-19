import { StyleSheet, Text, View } from "react-native";

function NumberContainer ({children}){
    return(
        <View style={styles.container}>
            <Text style={styles.numbertext}>{children}</Text>
        </View>
    )
}

export default NumberContainer;


const styles=StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:'white',
        borderRadius:8,
        margin:24,
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    numbertext:{
        color:'white',
        fontSize:36,
        fontWeight:'bold',
    }
})