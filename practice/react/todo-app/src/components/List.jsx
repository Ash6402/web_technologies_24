import ListItem from "./ListItem";

export default function List({todos, filter}){
    return (
            <ul className="wrapper">
                { 
                    todos
                    .filter((todo => {
                        if(filter == 'all')
                            return todo;
                        else if(filter == 'completed'){
                            return todo.completed;
                        }
                        else if(filter == 'active')
                            return !todo.completed;
                    }))
                    .map(todo => 
                        <ListItem key={todo.id} todo={todo} />
                    )
                }
            </ul>
    )
}