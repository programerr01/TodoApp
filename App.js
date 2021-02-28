import React, {useState, useEffect} from 'react';
import { Text, ScrollView ,Alert} from 'react-native';
import Header from "./components/Header.js";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

const HelloWorldApp = () => {
  const [todos , setTodos] = useState([]);
  function addNewTodo(value){
    if(!value){
      Alert.alert("Error","Please enter a value");
      return;
    }
    var td = todos
    td.push(value);
    setTodos([...td]);
    // console.log(todos);

  }
  function removeTodo(value){
    var td = todos;
    td = td.filter((each) => {return each != value})
    setTodos([...td]);
  }
  useEffect(() => {
    console.log('Fruit', todos);
  }, [todos])

  
  return (
    <ScrollView style={{width:'100%'}}>
      <Header />
      <AddTodo addNewTodo={addNewTodo}/>
      <Todos todos={todos} removeTodo={removeTodo} />
    </ScrollView>
  )
}
export default HelloWorldApp;