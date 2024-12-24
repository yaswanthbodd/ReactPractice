import { useState } from "react"

export const useCount=(initial = 0)=>{
    const [count, setCount] = useState(initial);

    const increase = ()=>{
        setCount((prev)=>prev+1)
    }

    const decrease = ()=>{
        setCount((prev) => prev-1);
    }

    const restart=()=>{
        setCount(0);
    }

    return {count, increase, decrease, restart};
}