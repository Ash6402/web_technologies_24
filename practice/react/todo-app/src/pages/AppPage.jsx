import { createContext, useState } from "react";
import Footer from "../components/Footer";
import List from "../components/List";
import TextInput from "../components/TextInput";
import Header from "../components/header";
import './AppPage.css'

export const TodosContext = createContext(null);

export default function AppPage(){
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    function addTodo(todo){
        setTodos(
            [...todos, todo]
        )
    }

    function handleFilter(_filter){
        setFilter(_filter);
    }
    
    return (
        <>
            <div className="background-image"></div>
            <div className="container main grid gap-m">
                <Header/>
                <TextInput add={addTodo} />
                <TodosContext.Provider value={{todos, setTodos}}>
                    <List todos={todos} filter={filter} />
                </TodosContext.Provider>
                <Footer setFilter={handleFilter} />
            </div>
        </>
    )
}