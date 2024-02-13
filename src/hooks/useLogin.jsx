import supabase from "./useSupabase";

export default async function useLogin(param){
    let { data, error } = await supabase.auth.signInWithOtp({
        email: "denis.alex08@yahoo.com",
        options: {
            emailRedirectTo: 'http://localhost:5173/found'
          }
      })
}