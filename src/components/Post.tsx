import React, {useEffect, useState} from "react";
import {greet} from "../utils/helperFunctions";
import {useParams} from "react-router-dom";
import {getPostById} from "../utils/APIUtils";
import IPost from "../interfaces/Post";

const Post = ({greeting}: {greeting: string}) => {
    const { id }: {id: string} = useParams();
    const [post, setPost] = useState<IPost>();

    useEffect(() => greet(greeting, Post.name), [greeting]);

    useEffect(() => {
        getPostById(parseInt(id)).then((post: IPost) => {
            setPost(post);
        });
    }, [id]);

    return (
        <div className="mt-6 mx-6">
            <div className="post-header">
                <h1>{post?.title}</h1>
                <div className="post-username-caption padding-x">{post?.user && `@${post?.user}`}</div>
            </div>
            <div className="post-content mt-6">{post?.content}</div>
            {post?.comments.map(comment => (
                <div className="post-comment padding-x" key={`${post.id}-${comment.id}`}>
                    {comment.content}
                </div>
            ))}
        </div>
    );
};

export default Post;