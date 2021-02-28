import React,{useState} from "react";
import {Button, StyleSheet,View,Image, TextInput, TouchableHighlight} from "react-native";
const AddTodo = (props) =>{
    const [addNew , setNew ]  = useState(false);
    const [input , setInput] = useState("");

    function handleClick(){
        setNew(!addNew);
        props.addNewTodo(input);
        setInput("");
    }
    return (
        <>
        {!addNew &&
        <TouchableHighlight style={styles.container}>
            <Button  
            onPress = {()=> {setNew(!addNew)}}
             title="Add"
             
            />
        </TouchableHighlight>
}
        {addNew &&
        <>
            <View  style={styles.addContainer}>
            <TextInput placeholder='Todo Title' value={input} onChangeText={text => setInput(text)} style={styles.inputText} />
            {/* <TextInput placeholder='Password' style={styles.inputText} secureTextEntry={true}/> */}
            <TouchableHighlight style={styles.add}>
            <Button color="#5d0fff" title="Add" onPress= {() => {handleClick()}}></Button>
            </TouchableHighlight>
            </View>
        </>
       
        }

        </>

    )
}
const styles = StyleSheet.create({
    container:{
        height: 40,
        borderRadius:10,
        // backgroundColor : "yellow",
        textAlign:"center",
        marginTop :20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
  
    },
    addContainer:{
        marginTop:10,
        marginBottom:10,
        backgroundColor:"#dde",
        textAlign:"center",
        justifyContent: 'center',
        borderRadius:3,
        height:100,
    },
    inputText:{
        textAlign:"center",
        // width:100,
        margin:8,
        backgroundColor:'yellow',
        width: '90%',
        height:40,
        color:'#f0f',
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add:{
        // marginTop:10,
        // marginBottom:10,
        // backgroundColor:"#dde",
        textAlign:"center",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        height:50,  
        width:'100%',
    }
   
})

export default AddTodo;
