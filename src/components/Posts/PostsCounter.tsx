import { useContext } from "react"
import { PostsContext } from "./PostsProvider"

export default function PostsCounter()
{
    const posts = useContext(PostsContext)
    const postsTotal = posts ? posts.length : 0;
    const selectedItemsNumber = posts 
        ? posts.reduce((counter, post) => post.selected === true ? counter += 1 : counter, 0)
        : 0;

    return (
        <>
            Total items: {postsTotal}
            Selected Items: {selectedItemsNumber}    
        </>
    )
}