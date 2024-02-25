import { useState } from "react";
import Footer from "../components/Footer";
import List from "../components/List";
import TextInput from "../components/TextInput";
import Header from "../components/header";
import './AppPage.css'

export default function AppPage(){
    const [todos, setTodos] = useState([]); 

    function addTodo(todo){
        setTodos(
            [...todos, todo]
        )
    }

    return (
        <>
            <div className="background-image"></div>
            <div className="container main grid gap-m">
                <Header/>
                <TextInput add={addTodo} />
                <List todos={todos} />
                <Footer/>
            </div>
        </>
    )
}