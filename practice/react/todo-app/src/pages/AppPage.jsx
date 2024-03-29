import { createContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import List from "../components/List";
import TextInput from "../components/TextInput";
import Header from "../components/header";
import './AppPage.css';
import '../services/http.service';
import { http_addTodo, http_fetchTodos, http_clearCompleted } from "../services/http.service";

export const TodosContext = createContext(null);

export default function AppPage(){
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const [active, setActive] = useState(0);

    async function addTodo(todo){
        const res = await http_addTodo(todo);
        if(res.status != 200) return;
        const {_id} = await res.json();
        console.log(_id);
        setTodos(
            [...todos, {_id, ...todo}]
        )
    }

    useEffect(() => {
        (async () => {
            const todos_res = await http_fetchTodos();
            if(todos_res.status >= 300) return;
            console.log("oui");
            setTodos([... await todos_res.json()])
        })()
    }, []);

    useEffect(() => {
        setActive(() => {
            let actives = 0;
            todos.forEach(todo => {
                if(!todo.completed)
                    actives += 1;
            })
            return actives;
        })
    }, [todos])

    function handleFilter(_filter){
        setFilter(_filter);
    }

    function clearCompleted(){
        http_clearCompleted().then(() => {
            setTodos(() => 
                todos.filter((_todo) => _todo.completed !== true)
            )
        })
    }
    
    return (
        <>
            <div className="background-image"></div>
            <div className="container main grid">
                <Header/>
                <TextInput add={addTodo} />
                <div className="wrapper">
                    <TodosContext.Provider value={{todos, setTodos}}>
                        <List todos={todos} filter={filter} />
                    </TodosContext.Provider>
                    <Footer actives={active} setFilter={handleFilter} clearCompleted={clearCompleted} />
                </div>
            </div>
        </>
    )
}