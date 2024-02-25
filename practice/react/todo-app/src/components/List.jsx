import ListItem from "./ListItem";

export default function List({todos}){
    return (
            <ul className="wrapper">
                { 
                    todos.map(todo => 
                        <ListItem todoText={todo} />
                    )
                }
            </ul>
    )
}