import Navbar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <div
                style={{
                minHeight: '100vh',
                minWidth: '100vw',
                padding: '20px',
                background: 'rgb(252, 252, 252)',
                }}
            >
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
