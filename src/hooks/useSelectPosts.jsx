import { useEffect, useState } from "react";
import supabase from "./useSupabase";

export default function useSelectPosts(status,index, limit) {
    const [state, setState] = useState({
        isLoading: true,
        data: {},
        count: 0,
        error: null,
    });

    useEffect(() => {
        const indexToSend = index * limit;
        const limitToSend = (index + 1) * limit - 1;
        let ignore = true;
      
        const fetch = async () => {  
            const ac = new AbortController()
            const { data, error, count } = await supabase
                .from("POSTS")
                .select("*", { count: "exact" })
                .eq("status", status)
                .range(indexToSend, limitToSend)
                .abortSignal(ac.signal)
                

            if (error) {
                setState((prev) => ({ ...prev, error:"error" }));
            }

            if (data && count && ignore) {
                setState((prev) => ({
                    ...prev,
                    count: count,
                    data: data,
                    isLoading: false,
                }));
            }

        };

        fetch();
        return () => {
            ignore = false;
          };
    }, [status]);

    return state;
}
