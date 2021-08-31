import Post from "../interfaces/Post";
import React, {useEffect} from "react";
import {greet} from "../utils/helperFunctions";
import {NavLink} from "react-router-dom";

const PostList = ({greeting, posts}: {greeting: string, posts: Post[]}) => {

    useEffect(() => greet(greeting, PostList.name), [greeting]);

    return (
        <div className="posts-list mt-6">
            {posts.map(post => (
                <div key={post.id}>
                    <NavLink className="navbar-item" to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </NavLink>
                    <div className="post-username-caption padding-x">@{post.user}</div>
                    <h3 className="padding-x mt-4">Comments</h3>
                    {post.comments.map(comment => (
                        <div className="post-comment padding-x" key={`${post.id}-${comment.id}`}>
                            {comment.content}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PostList;