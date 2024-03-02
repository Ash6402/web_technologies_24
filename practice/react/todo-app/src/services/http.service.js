const apiUrl = 'http://localhost:3000';

async function fetchTodos (){
    const response = await fetch(apiUrl);
    return await response.json();
}

async function addTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    
    return response.json();
}

async function deleteTodo(id){
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    })

    return response.json();
}

export default {
    fetch: fetchTodos,
    add: addTodo,
    delete: deleteTodo,
}