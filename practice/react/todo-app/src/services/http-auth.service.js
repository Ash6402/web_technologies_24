const authUrl = "http://localhost:3000/auth"

export async function signUp(formData){
   const response = await fetch(`${authUrl}/signup`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData),
   })

   return response;
}

export async function login(formData){
    const response = await fetch(`${authUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
    })

    const json = await response.json()
    localStorage.setItem("id", json.id)

    return response;
}

export async function refresh(){
    const response = await fetch(`${authUrl}/refresh`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({id: localStorage.getItem("id")}),
    })

    return response
}