import { Link } from "react-router-dom";

export default function ContactList({ contacts, deleteContact }) {

    return (
        <div>
            <h1 style={{ color: "#023E8A" }}>Contacts</h1>
            {contacts.length === 0 ? (
                <h2 style={{ color: "#393939" }}>No contacts yet...</h2>
            ) : (
                contacts.map(contact => (
                    <div
                        key={contact.id}
                        style={{
                            marginBottom: "50px",
                            background: "rgb(246, 246, 246)",
                            color: "black",
                            width: "40%",
                            margin: "auto auto 15px auto",
                            padding: "20px",
                            borderRadius: "5px",
                            border: "solid 1px #d2d2d2"
                        }}>
                            <Link to={`/contacts/${contact.id}`}>
                                <b>{contact.name}</b>
                            </Link>
                            {" — "}
                            {contact.phone}

                            <button
                                onClick={() => deleteContact(contact.id)}
                                style={{ fontSize: "1.1vh", background: "#b43a3a", marginLeft: "15px" }}
                            >
                                Delete
                            </button>
                    </div>
                ))
            )}
        </div>
    );
}
