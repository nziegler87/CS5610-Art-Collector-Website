import React from "react";
import PostItem from "../PostItem";

const PostFeed = ({posts}) => {

    return (
        <div className={"p-2 border-bottom"}>
            <div className={"list-group"}>
                {posts.map(update_post =>
                    <PostItem key={update_post._id} update={update_post}/>)}
            </div>
        </div>
    )
}

export default PostFeed;