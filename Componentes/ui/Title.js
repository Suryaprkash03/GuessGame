import { StyleSheet, Text } from "react-native";

function Title ({children})
{
    return(
    <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        borderWidth:3,
        borderColor:'white',
        padding:12,
        marginTop:20,
        backgroundColor:'#1C2833'
    }
});