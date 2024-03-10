import supabase from "./useSupabase";
import { useEffect, useState } from "react";

export default async function useFetchPost(id) {
    const [state, setState] = useState(null);

    let { data, error } = await supabase
        .from('POSTS')
        .select("*")
        .eq('id', id)
    setState(data)

    return state
}