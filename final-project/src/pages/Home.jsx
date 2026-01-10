export default function Home() {
    return (
        <div
        style={{
            color: "black",
            padding: "20px",
            maxWidth: "800px",
            margin: "0 auto",
            boxSizing: "border-box",
            wordWrap: "break-word",
        }}>
            <h1 style={{ color: "#023E8A" }}>Contact Manager App</h1>

            <h2 style={{ color: "Ocean Blue #0077B6" }}>This app allows you to manage your contacts easily.</h2>
            <p style={{ color: "Ocean Blue #0077B6" }}><b><i>Loads premade contacts from initialContacts.js and saves state into LocalStorage after</i></b></p>

            <ul style={{ listStyle: "none", paddingLeft: "150px", textAlign: "left" }}>
                <li style={{ marginBottom: "15px" }}><b>Home</b> — application infromation
                </li>
                <li style={{ marginBottom: "15px" }}><b>Add Contact</b> — add new contacts using a form
                    <ul style={{ listStyle: "initial" }}>
                        <li>A list of data in an array that is managed using a useState</li>
                        <li>With one error-message line that is handled with a useState</li>
                        <li>A form element where user inputs data that is tracked and updated with onChange</li>
                        <li>Simple error handling using else ifs</li>
                        <li>Clears input form after contact has been added succesfully</li>
                    </ul>
                </li>
                <li style={{ marginBottom: "15px" }}><b>Contact List</b> — view, delete and access contact details
                    <ul style={{ listStyle: "initial" }}>
                        <li>Shows absence of contacts or list of contacts</li>
                        <li>Displays every contact using map-function</li>
                        <li>Has link to contact details on name</li>
                        <li>Delete button to delete contacts using filter-function by id</li>
                    </ul>
                </li>
                <li style={{ marginBottom: "15px" }}><b>Contact Details</b> — view full contact information
                    <ul style={{ listStyle: "initial" }}>
                        <li>Shows full contact information</li>
                        <li>Simply displays information for given contact</li>
                        <li>Delete contact from this view. Takes user back to Contact List-view.</li>
                        <li>Edit contact information. Form visible with contact information when editing using ternary operator. Basically the same function as in the contact adding.</li>
                        <li><b>Used ChatGPT to get help to making the <u>edit function</u></b></li>
                    </ul>
                </li>
                <li style={{ marginBottom: "15px" }}><b>Navbar</b> — using Layout component
                    <ul style={{ listStyle: "initial" }}>
                        <li>Navigation with routes and NavLinks to show active status</li>
                    </ul>
                </li>
                <li style={{ marginBottom: "15px" }}><b>Not Found Page</b> — display when undefined route.
                </li>
            </ul>
        </div>
    );
}
