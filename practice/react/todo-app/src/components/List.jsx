import ListItem from "./ListItem";
import './List.css';

export default function List({todos, filter}){
    const filteredTodos = 
    todos.filter((todo => {
        if(filter == 'all')
            return todo;
        else if(filter == 'completed'){
            return todo.completed;
        }
        else if(filter == 'active')
            return !todo.completed;
    }));

    if(todos.length == 0)
        return (
            <div className="wrapper pad-m text-center">
                <p className="color-gray">No work to do!</p>
            </div>
        )
    else
        return (
            <ul className="wrapper list">
                { 
                    filteredTodos.length > 0 ? 
                    filteredTodos.map(todo => 
                        <ListItem key={todo._id} todo={todo} />
                    ) : 
                    <div className="wrapper pad-m text-center">
                        <p className="color-gray">List is empty!</p>
                    </div>
                }
            </ul>
        )
}