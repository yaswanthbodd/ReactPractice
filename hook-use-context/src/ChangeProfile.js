import { AppContext } from "./App";
import { useContext, useState } from "react";
export const ChangeProfile=()=>{
    const [newUserName,setNewUserName]=useState("");
    const {setUserName}=useContext(AppContext)
    return(
        <div>
            <input onChange={(e)=> setNewUserName(e.target.value)}/>
            <button onClick={()=>setUserName(newUserName)}>Change</button>
        </div>
    )
}