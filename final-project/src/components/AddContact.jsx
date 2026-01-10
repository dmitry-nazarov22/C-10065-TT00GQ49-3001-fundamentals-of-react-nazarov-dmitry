import { useState } from "react";

function AddContact({ addContact }) {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name.trim()) {
            setMessage('Name must be entered')
        } else if (!form.phone.trim()) {
            setMessage('Phone must be entered')
        } else if (!form.phone.includes('+358') && !form.phone.includes('04')) {
            setMessage('Phone number must be finnish [+358 or 04]')
        } else if (!form.email.includes('@')) {
            setMessage('Enter a valid email')
        } else {
            setMessage('Contact added!')

            const newContact = {
                id: Date.now().toString(),
                ...form
            };
            addContact(newContact);

            setForm({
                name: "",
                phone: "",
                email: "",
                address: ""
            })
        }
    };

    const inputStyle = {
        background: "rgb(246, 246, 246)",
        color: "black",
        fontSize: "1vh",
        borderRadius: "5px",
        border: "solid 1px #d2d2d2",
        padding: "10px",
        width: "200px"
    }

    return (
        <div>
        <h1 style={{ color: "#023E8A" }}>Add Contact</h1>
        <form
        style={{
            marginBottom: "50px",
            background: "white",
            padding: "30px",
            borderRadius: "5px",
            color: "black",
            width: "40%",
            margin: "auto auto 15px auto",
        }}
        onSubmit={handleSubmit}
        >
            <input style={inputStyle} name="name" placeholder="Name" value={form.name} onChange={handleChange} required /><br /><br />
            <input style={inputStyle} name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required /><br /><br />
            <input style={inputStyle} name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br /><br />
            <input style={inputStyle} name="address" placeholder="Address" value={form.address} onChange={handleChange} /><br /><br />

            <p>{message}</p>
            <button
                style={{ background: "#023E8A" }}
                type="submit"
            >Add Contact</button>
        </form>
        </div>
    );
}

export default AddContact;
