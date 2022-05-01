import React from "react";
import CreatePost from "./CreatePost";
import PostFeed from "./PostFeed";
import EmptyPosts from "../Errors/EmptyPosts";
import SecureContent from "../../_security/secure-content";
import ComponentHeader from "../ComponentHeader";
import SecureArtistContent from "../../_security/secure-artist-content";
import LogInModal from "../Auth/LoginModalButton";
import UnsecuredContent from "../../_security/unsecured-content";

const Posts = ({painting_data, posts, is_artist}) => {

    return (
        <div className={"mb-2"}>
            {ComponentHeader("Comments")}

            <div className={"p-2"}>
                {posts.length === 0 ?
                    EmptyPosts()
                    :
                    <>
                        <PostFeed posts={posts}/>
                        <UnsecuredContent>
                            <h6 className={"mt-2"}>Sign in to comment</h6>
                            <LogInModal text={"Sign In"}/>
                        </UnsecuredContent>
                    </>
                }
            </div>
            {is_artist ?
                <SecureArtistContent>
                    <CreatePost is_artist={is_artist} painting_data={painting_data}/>
                </SecureArtistContent>
                :
                <SecureContent>
                    <CreatePost is_artist={is_artist} painting_data={painting_data}/>
                </SecureContent>
            }
        </div>
    )
}

export default Posts;