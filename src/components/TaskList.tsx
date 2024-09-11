import { Link } from "react-router-dom"

export default function TaskList()
{
    return (
        <>
            <nav>
                <Link to="/posts" className="nav-item">Posts</Link>
                <Link to="/user" className="nav-item">User</Link>
            </nav>
            Main page
        </>
    )
}