import { baseUrl } from "./railsUrl";

export async function signup({name, email, password}) {
    const data = {user: {name, email, password}}
    const res = await fetch(`${baseUrl}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
          },
        body: JSON.stringify(data)
    })

    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)
      }
      const result = await res.json()
      return result   
}

export async function login({email, password}) {
    const data = {user: {email, password}}
    const res = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
          },
        body: JSON.stringify(data)  
    })
    if (!res.ok) {
        const {error} = await res.json()
        throw new Error(error)
      }
      const result = await res.json()
      return result   
}