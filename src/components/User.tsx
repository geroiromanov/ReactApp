import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User()
{
    const url = 'https://randomuser.me/api/?results=1';

    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data.results[0]))
    }, [])

    const tmpl = user 
        ? `
            Name:` + user.name.first + ` </br>
            <img src=` + user.picture.large + `>
        `
        : 'pending data';

    return (
        <>
            <nav>
                <Link to="/">Main</Link>
                <Link to="/posts">Posts</Link>
            </nav>

            {tmpl}
        </>
    )
}