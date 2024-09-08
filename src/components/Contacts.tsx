import { Link, Outlet } from "react-router-dom";

export default function Contacts()
{
    return (
        <>
            <nav>
                <Link to="/">Task</Link>
                <Link to="/meals">meals</Link>
            </nav>
            <h1>Contacts</h1>
            <Outlet />
        </>
    )
}