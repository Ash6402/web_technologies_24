const authUrl = "http://localhost:3000/auth"

export async function signUp(formData){
   const response = await fetch(`${authUrl}/signup`,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(formData),
   })

   return response.status;
}