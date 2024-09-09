import { useContext } from "react"
import { PostsContext, PostsContextDispatch } from "./PostsProvider"
import PostEl from "./PostsEl";

export default function PostsList() {
    const posts = useContext(PostsContext);
    const dispatch = useContext(PostsContextDispatch)

    function onChange(id) {
        dispatch(posts.map(post => post.id === id
            ? {...post, selected: !post.selected}
            : post
        ))
    }

    function onSave(id, title) {
        dispatch(posts.map(post => post.id === id
            ? {...post, title: title}
            : post
        ))
    }

    function onDelete(id) {
        dispatch(posts.filter(post => post.id !== id));
    }

    const postsTemplate = posts
        ? posts.map(post => 
            <PostEl 
                key={post.id} 
                post={post} 
                onChange={onChange} 
                onSave={onSave}
                onDelete={onDelete}
            />
        ) : [];

    return (
        <ul>
            {postsTemplate}
        </ul>
    )
}