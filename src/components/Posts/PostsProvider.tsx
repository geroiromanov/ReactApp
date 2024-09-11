import { createContext, useEffect, useReducer, useState } from "react";

const url = 'https://fakestoreapiserver.reactbd.com/posts';

export const PostsContext = createContext(null);
export const PostsContextDispatch = createContext(null);

export default function PostsProvider({children}) {

    const [posts, dispatch] = useReducer(reducer, null);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        // .then(data => setPosts(data.map(post => ({...post, selected: false}))));
        .then(data => dispatch({type: 'set', data: data.map(post => ({...post, selected: false}))}));
    }, []);

    function reducer(state, action)
    {
        console.log(state);
        
        switch (action.type) {
            case 'set': {
                return action.data;
            }
            case 'update': {
                return state.map(post => post.id === action.id 
                    ? {...post, selected: action.selected}
                    : post
                )
            }
            case 'save': {
                return state.map(post => post.id === action.id 
                    ? {...post, title: action.title}
                    : post
                )
            }
            case 'delete': {
                return state.filter(post => post.id !== action.id);
            }
        }
    }

    return (
        <>
            <PostsContext.Provider value={posts}>
                <PostsContextDispatch.Provider value={dispatch}>
                    {children}
                </PostsContextDispatch.Provider>
            </PostsContext.Provider>
        </>
    )
}