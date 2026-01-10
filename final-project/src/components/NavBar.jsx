import { NavLink } from "react-router-dom";

function Navbar() {
    const linkStyle = {
        color: '#393939',
        fontWeight: 'bold',
        margin: '10px',
        textDecoration: 'none',
        paddingBottom: '2px',
    };

    const activeStyle = {
        color: '#023E8A',
        borderBottom: '2px solid #19747E',
    };

    return (
        <nav style={{ background: '#ffffff', padding: '10px', minWidth: '100vw'}}>
        <NavLink
            to="/"
            style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
        >
            Home
        </NavLink>
        <NavLink
            to="/addContact"
            style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
        >
            Add Contact
        </NavLink>
        <NavLink
            to="/contactList"
            style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
        >
            Contact List
        </NavLink>
        </nav>
    );
}

export default Navbar;