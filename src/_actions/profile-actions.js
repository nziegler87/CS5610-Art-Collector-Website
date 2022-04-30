import * as service from "../_services/auth-service"

export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const LOG_IN = "LOG_IN"
export const SIGN_UP = "SIGN_UP"
export const GET_PROFILE = "GET_PROFILE"
export const LOGOUT = "LOGOUT"
export const CHECK_LOGGED_IN = "CHECK_LOGGED_IN"

export const getProfile = async (dispatch) => {
    //console.log("inside getProfile in profile-actions")
    const profile = await service.profile();
    dispatch({
        type: GET_PROFILE,
        profile
    })
    //console.log("In the profile actions. In getProfile. About to return this profile: " + JSON.stringify(profile, undefined, 4))
    return profile
}

export const checkLoggedIn = async (dispatch) => {
    try {
        //console.log("inside checkLoggedIn in profile-actions")
        const profile = await service.profile()
        dispatch({
            type: CHECK_LOGGED_IN,
            profile
        })
        return profile
    } catch (e)
    {
        dispatch({
            type: CHECK_LOGGED_IN,
            profile: null
        })
        return null
        }
}

export const update = async (dispatch, user) => {
    //console.log("inside update in profile-actions")
    //console.log("This is the user: " + user)
    const profile = await service.update(user);
    if ( profile === "OK") {
        dispatch({
            type: UPDATE_PROFILE,
            profile
        })
    }
}


export const login = async (dispatch, email, password) => {
    //console.log("inside login in profile-actions")
    const profile = await service.login(email, password);
    dispatch({
        type: LOG_IN,
        profile
    })
}

export const signup = async (dispatch, email, username, password) => {
    //console.log("inside signup in profile-actions")
    const profile = await service.signup(email, username, password);
    dispatch({
        type: SIGN_UP,
        profile
    })
}

export const logout = async (dispatch) => {
    //console.log("inside logout in profile-actions")
    const profile = await service.logout();
    dispatch({
        type: LOGOUT,
        profile
    })
}