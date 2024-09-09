import PostsCounter from "./PostsCounter";
import PostsList from "./PostsList";
import PostsProvider from "./PostsProvider";

export default function PostsLayout() {
    return (
        <>
            <PostsProvider>
                <PostsCounter />
                <PostsList />
            </PostsProvider>
        </>
    )
}