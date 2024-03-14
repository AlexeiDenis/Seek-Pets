import { useEffect, useLayoutEffect, useState } from "react";
import supabase from "./useSupabase";
import { useSearchParams } from "react-router-dom";
export default function useSelectPosts(status,index, limit, filterBy) {
    const [state, setState] = useState({
        isLoading: true,
        data: {},
        count: 0,
        error: null,
    });
   const [_, setSearchParamas]= useSearchParams();
    useLayoutEffect(() => {
       
        const indexToSend = index * limit;
        const limitToSend = (index + 1) * limit;
        setSearchParamas({
            page:index,
            limit:limit,
            filterBy:[...filterBy].join('-')
        })
        let ignore = true;
        const fetch = async () => {  
            const ac = new AbortController()
            const { data, error, count } = await supabase
                .from("POSTS")
                .select("*", { count: "exact" })
                .eq("status", status)
                .in('type',filterBy)
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
    }, [status, index, limit, filterBy]);

    return state;
}
