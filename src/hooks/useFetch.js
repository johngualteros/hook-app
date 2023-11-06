import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {

    const [ state, setState ] = useState({
        data: null,
        loading: true,
        error: null
    });

    const getfetch = async () => {
        setState({
            ...state,
            loading: true
        });
        const res = await fetch(url);
        const data = await res.json();
        setState({
            data: data,
            loading: false,
            error: null
        });
    };
    
    useEffect(() => {
        getfetch();
    }, [url]);

    return {
        data: state.data,
        loading: state.loading,
        error: state.error
    };
}
