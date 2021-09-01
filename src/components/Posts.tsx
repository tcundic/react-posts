import {useEffect, useState} from "react";
import {greet} from "../utils/helperFunctions";
import {getPosts} from "../utils/APIUtils";
import Post from "../interfaces/Post";
import PostList from "./PostList";
import useFilter from "./useFilter";

const Posts = ({greeting}: {greeting: string}) => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
    const [username, usernameInput] = useFilter({greeting, type: "text", placeholder: "Enter username"});

    useEffect(() => greet(greeting, Posts.name), [greeting]);

    useEffect(() => {
        getPosts().then((posts: Post[]) => {
            setPosts(posts);
            setFilteredPosts(posts);
        });
    }, []);

    useEffect(() => {
        // @ts-ignore
        setFilteredPosts(posts.filter((post: Post) => post.user.includes(username)));
    }, [username, posts]);

    return (
        <div className="mt-6 mx-6">
            <div className="posts-header">
                <h1>Posts</h1>
                {usernameInput}
            </div>
            <PostList posts={filteredPosts} greeting={greeting} />
        </div>
    );
};

export default Posts;