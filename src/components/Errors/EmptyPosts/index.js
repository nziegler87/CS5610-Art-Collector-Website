import {Link} from "react-router-dom";
import React from "react";
import LogInModal from "../../Auth/LoginModal";
import UnsecuredContent from "../../Security/unsecured-content";

const EmptyPosts = () => {

    return (
        <>
            <h6>Oh no! There are no comments on this page yet</h6>
            <UnsecuredContent>
                <LogInModal text={"Be the first"}/>
            </UnsecuredContent>
        </>
    )
}

export default EmptyPosts;