import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch"

export const MultipleCustomHooks = () => {
    const { count, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${count}`);

    const {author, quote} = !!data && data[0];

    return (
        <>
            <h1>Breaking bad quotes</h1>
            <hr/>
            {
                loading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-right p-3">
                        <p className="my-3 text-primary">{quote}</p>
                        <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                )
            }
            <button 
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={loading}
                >
                Next Quote
            </button>
        </>
    )
}
