import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext(null);

export default function MealsProvider({children}) {

    const [posts, setPosts] = useState(null)    ;

    useEffect(() => {
        // const fetchData = async() => {
        //     const res = await fetch('https://fakestoreapiserver.reactbd.com/posts') 
        //     const jsonData = await res.json()
        //     setPosts(jsonData)
        // }
        // fetchData();
        fetch('https://fakestoreapiserver.reactbd.com/posts') 
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    // console.log(posts);
    

    return (
        <MealsContext.Provider value={posts}>
            {children}
        </MealsContext.Provider>
    ) 

}