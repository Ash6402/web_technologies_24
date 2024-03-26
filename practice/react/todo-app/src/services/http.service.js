import { refresh } from "./http-auth.service";

const apiUrl = 'http://localhost:3000/todo';

export async function http_fetchTodos(){
    const id = localStorage.getItem("id");
    const response = await fetch(`${apiUrl}/all`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id}),
    });
    return await interceptor(response, http_fetchTodos);
}

export async function http_addTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({todo}),
        credentials: 'include',
    })
    return await interceptor(response, http_addTodo, todo);
}

export async function http_deleteTodo(id){
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        credentials: 'include',
    })
    return await interceptor(response, http_deleteTodo, id);
}

export async function http_updateTodo(todo){
    const response = await fetch(`${apiUrl}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({todo}),
        credentials: 'include',
    })
    return await interceptor(response, http_updateTodo, todo);
}

export async function http_clearCompleted(){
    const response = await fetch(`${apiUrl}/completed/clear`, {
        method: "DELETE",
        credentials: 'include',
    })
    return await interceptor(response, http_clearCompleted);
}

async function interceptor(res, fn, arg){
    if(res.status === 403){
        await refresh();
        return fn(arg)
    }
    return res;
}