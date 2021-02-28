import React from "react";
import {View , Text,StyleSheet} from "react-native"


const Header = ()=>{
    return (
        <View style={styles.view}>
            <Text style={styles.logo}>Todo Manager</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    view:{
        backgroundColor:'red',
        height:50,
        margin:3,
        justifyContent: 'center',
        borderBottomColor:"blue",
        borderRadius:4,
    },
    logo:{
        fontFamily:"Times-now sans sans-serif",
        fontSize:20,
        fontWeight:"bold",
        margin:2,
        color:"white",
        textShadowColor:"#0f0",
        textShadowRadius:1,
    
    }
})

export default Header;