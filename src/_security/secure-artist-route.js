import {useProfile} from "../_context/profile-context";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

const SecureArtistRoute = ({children}) => {
    const {checkLoggedIn} = useProfile()
    const [currentUser, setCurrentUser] = useState()
    const [waiting, setWaiting] = useState(true)

    const check = async () => {
        try {
            const user = await checkLoggedIn()
            if (user.hasOwnProperty("is_artist") && (user.is_artist === true)) {
                setCurrentUser(user)
            setWaiting(false)}
        } catch (e) {
            setWaiting(false)
        }
    }

    // check when it loads
    useEffect(() => {
        check()
    }, [])

    if (currentUser) {
        return children
    } else if (waiting) {
        return null
    } else {
        return <Navigate to={"/home"}/>
    }

}


export default SecureArtistRoute