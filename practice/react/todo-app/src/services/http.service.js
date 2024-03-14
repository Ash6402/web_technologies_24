import { refresh } from "./http-auth.service";

const apiUrl = 'http://localhost:3000/todo';

export async function http_fetchTodos(){
    const response = await fetch(apiUrl, {
        credentials: 'include',
    });
    await interceptor(response, http_fetchTodos)
    console.log("fetch_todos called")
    return response;
}

export async function http_addTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
        credentials: 'include',
    })
    await interceptor(response, http_addTodo, todo)
    return response.status < 300 && response.json();
}

export async function http_deleteTodo(id){
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        credentials: 'include',
    })
    await interceptor(response, http_deleteTodo, id)
    return response.status < 300 && response.json();
}

export async function http_updateTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
        credentials: 'include',
    })
    await interceptor(response, http_updateTodo, todo)
    return response.status < 300 && response.json();
}

export async function http_clearCompleted(){
    const response = await fetch(`${apiUrl}/completed/clear`, {
        method: "DELETE",
        credentials: 'include',
    })
    await interceptor(response, http_clearCompleted)
    return response.status < 300 && response.json();
}

async function interceptor(res, fn, arg){
    if(res.status === 403){
        await refresh();
        fn(arg)
    }
}