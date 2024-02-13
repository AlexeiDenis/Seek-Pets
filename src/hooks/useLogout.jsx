import supabase from "./useSupabase";

export default async function useLogout(){
    let { error } = await supabase.auth.signOut()
}