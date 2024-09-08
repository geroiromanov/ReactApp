import { Link } from "react-router-dom";

export default function About()
{
    return (
        <>
            <nav>
                <Link to="/">Task</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
            <h1>About</h1>
        </>
    )
}