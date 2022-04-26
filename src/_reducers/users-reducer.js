import {ADMIN_UPDATE_PROFILE, FIND_ALL_USERS} from "../_actions/users-actions";

const usersReducer = (state = [], action) => {
    // console.log("In users reducer. This is the action type: " + action.type)

    switch (action.type) {
        case FIND_ALL_USERS:
            return action.users;
        case ADMIN_UPDATE_PROFILE:
            console.log("In user reducer. In update profile. " + action.user._id)
            const unsorted = state.map(user => user._id === action.user._id ? action.user : user)
            const sorted = unsorted.sort((a,b) =>  a.username-b.username)
            return sorted
        default:
            return state
    }
}

export default usersReducer;