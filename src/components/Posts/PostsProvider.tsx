import { createContext, useEffect, useState } from "react";

const url = 'https://fakestoreapiserver.reactbd.com/posts';

export const PostsContext = createContext(null);
export const PostsContextDispatch = createContext(null);

export default function PostsProvider({children}) {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data.map(post => ({...post, selected: false}))));
    }, []);

    return (
        <>
            <PostsContext.Provider value={posts}>
                <PostsContextDispatch.Provider value={setPosts}>
                    {children}
                </PostsContextDispatch.Provider>
            </PostsContext.Provider>
        </>
    )
}