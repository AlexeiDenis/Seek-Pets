import { useState } from "react"
import supabase from "../hooks/useSupabase";
export default function LoginPage(){
    let [email, setEmail]= useState("")
    function handleChange(event) {
        setEmail(event.target.value);
      }
 async function useLogin(){
        let { data, error } = await supabase.auth.signInWithOtp({
            email: "denis.alex08@yahoo.com",
            options: {
                emailRedirectTo: 'http://localhost:5173/found'
              }
          })
    }
    return(
        <div>
            <p>Login page</p>
           <p>{email}</p>
            <form>
            <label htmlFor="email">Enter your email: </label>
            <input onChange={handleChange} type="email" value={email} name="email" id="email" required /> 

            <button onClick={useLogin}>Send magic link</button>
            </form>
        </div>
    )
}