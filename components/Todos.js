import React from "react";
import {View , Text,ScrollView} from "react-native";
import Todo from "./Todo";

const Todos = (props) =>{
    console.log(props.todos);
    return (
        <ScrollView>
            {props.todos.map((each)=>(
                <Todo todo={each} removeTodo={props.removeTodo} />
            ))}
        </ScrollView>
    ) 

};

export default Todos;