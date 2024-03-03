const apiUrl = 'http://localhost:3000';

export async function http_fetchTodos (){
    const response = await fetch(apiUrl);
    return await response.json();
}

export async function http_addTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })
    
    return response.json();
}

export async function http_deleteTodo(id){
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
    })

    return response.json();
}

export async function http_updateTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
    })

    return response.json();
}