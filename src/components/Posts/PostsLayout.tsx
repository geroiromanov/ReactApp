import PostsCounter from "./PostsCounter";
import PostsList from "./PostsList";
import PostsProvider from "./PostsProvider";
import { Link } from "react-router-dom";
import React from 'react'

export default function PostsLayout() {
    return (
        <>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/user">User</Link>
            </nav>
            
            <PostsProvider>
                <PostsCounter />
                <PostsList />
            </PostsProvider>
        </>
    )
}