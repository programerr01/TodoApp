import React from "react";
import {View , Text, StyleSheet} from "react-native";

const Todo = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{props.todo}</Text>
            <Text onPress={() => {props.removeTodo(props.todo)}} style={styles.close}>X</Text>
        </View>
    ) 

};
const styles = StyleSheet.create({
    view:{
        flex:1,
        // textAlignVertical:"center",
        height:40,
        backgroundColor:'#ddd',
        textAlign:'center',
        margin:4,
        borderRadius:10,
        shadowRadius:2,
        shadowColor:"gray",
        justifyContent: 'center',

    },
    text:{
        color:"#0cc",
        fontStyle:'italic',
        fontSize:18,
        justifyContent: 'center',
        textAlign:'center',
    },
    close:{
        justifyContent: 'center',
        textAlign:"right",
        marginTop:-20,
        marginRight:10,
        color:"#ff0011",
        fontWeight:"bold",
        position:'relative',

    }
});

export default Todo;