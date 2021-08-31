
interface Post {
    id: number,
    title: string,
    content: string,
    user: string,
    comments: Comment[]
};

interface Comment {
    id: number,
    content: string
}

export default Post;