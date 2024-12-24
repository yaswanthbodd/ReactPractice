import { useContext } from "react"
import { AppContext } from "../App"
import { ChangeProfile } from "../ChangeProfile"
export const Profile=()=>{
    const {userName}=useContext(AppContext)
    return(
        <div>
            <h1>Profile and the user name is {userName}</h1>
            <ChangeProfile />
        </div>
    )
}