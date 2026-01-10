import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ContactDetails({ contacts, deleteContact, editContact }) {
    const [editing, setEditing] = useState(false);
    const [editForm, setEditForm] = useState({ name: "", phone: "", email: "", address: "" });
    const [message, setMessage] = useState("");

    const { id } = useParams();
    const contact = contacts.find(c => c.id === id);

    if (!contact) {
        return <h2>Contact not found</h2>;
    }

    const startEdit = () => {
        setEditing(true);
        setEditForm({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        address: contact.address
        });
        setMessage("");
    };

    const handleChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!editForm.name.trim()) {
        setMessage("Name must be entered");
        return;
        }
        if (!editForm.phone.trim()) {
        setMessage("Phone must be entered");
        return;
        }
        if (!editForm.phone.includes("+358") && !editForm.phone.includes("04")) {
        setMessage("Phone number must be Finnish [+358 or 04]");
        return;
        }
        if (editForm.email && !editForm.email.includes("@")) {
        setMessage("Enter a valid email");
        return;
        }

        editContact(contact.id, editForm);
        setEditing(false);
        setMessage("");
    };

    const handleCancel = () => {
        setEditing(false);
        setMessage("");
    };

    const inputStyle = {
        background: "rgb(246, 246, 246)",
        color: "black",
        fontSize: "1vh",
        borderRadius: "5px",
        border: "solid 1px #d2d2d2",
        padding: "5px",
        width: "100%",
        marginBottom: "5px"
    };

    return (
        <>
        <h1 style={{ color: "#023E8A" }}>Contact details</h1>
        <div
            style={{
            position: "relative",
            marginBottom: "50px",
            background: "rgb(246, 246, 246)",
            color: "black",
            width: "40%",
            margin: "auto",
            padding: "50px",
            borderRadius: "5px",
            border: "solid 1px #d2d2d2"
            }}
        >
            <Link to="/contactList">
            <button
                style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "#023E8A",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer"
                }}
            >
                Back
            </button>
            </Link>

            {!editing ? (
            <>
                <h2 style={{ color: "#023E8A" }}>{contact.name}</h2>
                <h4><b>Phone:</b> {contact.phone}</h4>
                <h4><b>Email:</b> {contact.email}</h4>
                <h4><b>Address:</b> {contact.address}</h4>

                <Link to="/contactList">
                <button
                    onClick={() => deleteContact(contact.id)}
                    style={{ fontSize: "1.1vh", background: "#b43a3a" }}
                >
                    Delete
                </button>
                </Link>
                <button
                onClick={startEdit}
                style={{
                    fontSize: "1.1vh",
                    background: "white",
                    color: "#023E8A",
                    border: "solid 1px #aaaaaa",
                    margin: "10px 0 0 10px"
                }}
                >
                Edit
                </button>
            </>
            ) : (
            <form onSubmit={handleSave} style={{ marginTop: "20px" }}>
                <input style={inputStyle} name="name" placeholder="Name" value={editForm.name} onChange={handleChange} />
                <input style={inputStyle} name="phone" placeholder="Phone" value={editForm.phone} onChange={handleChange} />
                <input style={inputStyle} name="email" placeholder="Email" value={editForm.email} onChange={handleChange} />
                <input style={inputStyle} name="address" placeholder="Address" value={editForm.address} onChange={handleChange} />
                {message && <p style={{ color: "red" }}>{message}</p>}
                <button type="submit" style={{ marginRight: "5px", background: "#023E8A", color: "white", padding: "5px 10px" }}>Save</button>
                <button type="button" onClick={handleCancel} style={{ padding: "5px 10px" }}>Cancel</button>
            </form>
            )}
        </div>
        </>
    );
}
