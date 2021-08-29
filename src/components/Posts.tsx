import {useEffect} from "react";
import {greet} from "../utils/helperFunctions";

const Posts = ({greeting}: {greeting: string}) => {

    useEffect(() => greet(greeting, Posts.name));

    return (
        <div>POSTS</div>);
};

export default Posts;