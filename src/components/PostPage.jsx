import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import supabase from "../hooks/useSupabase";
export default function PostPage() {
    const [state, setState] = useState({
        data: {},
        error: null,
        isLoading: true
    })
    let { id } = useParams();

    useEffect(() => {
        let ignore = true;
        const fetch = async () => {
            let { data, error } = await supabase
                .from('POSTS')
                .select("*")
                .eq('id', id);
            if (error) {
                setState((prev) => ({ ...prev, error: error }))
            }
            if (data && ignore) {
                setState((prev) => ({ ...prev, data: data, isLoading: false }))
            }
        }
        fetch();

        return () => {
            ignore = false;
        }
    }, []);


    return (
        <>
            {state.isLoading ? (
                <p>Data is loading...</p>
            ) : state.error ? (<p>There was an issue loading this post</p>) :
                (
                    <p>{state.data[0].name}</p>
                )}
        </>
    )
}