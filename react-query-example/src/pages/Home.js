import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';
export const Home=()=>{
    const {data, isLoading,isError,refetch} = useQuery(["cat"] , ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    });

    if(isError){
        return <h1>Sorry, There is an error</h1>
    }
    if(isLoading){
        return <h1>Loding.....</h1>
    }
    return(
        <h1>This is Home Page <p>{data.fact}</p>
        <button onClick={refetch}>Update</button>
        </h1>
    )
}