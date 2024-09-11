import { useContext } from "react"
import { PostsContext } from "./PostsProvider"
import PostEl from "./PostsEl";

export default function PostsList() {
    const posts = useContext(PostsContext);

    const postsTemplate = posts
        ? posts.map(post => 
            <PostEl 
                key={post.id} 
                post={post} 
            />
        ) : [];

    return (
        <ul>
            {postsTemplate}
        </ul>
    )
}