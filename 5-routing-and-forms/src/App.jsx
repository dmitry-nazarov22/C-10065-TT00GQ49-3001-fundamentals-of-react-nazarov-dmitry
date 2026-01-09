import './App.css'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

const pageStyle = {
  padding: '40px',
  borderRadius: '8px',
};

// Individual pages

function Home() {
  return (
    <div style={{ ...pageStyle, background: '#bdbdbdff', color: 'black', }}>
      <h2>Home</h2>
        <p>Welcome to our homepage!</p>
    </div>
  )
}

function About() {
  return (
    <div style={{ ...pageStyle, background: '#ccb898ff', color: 'black', }}>
      <h2>About</h2>
      <p>Working hard on my project</p>
    </div>

  );
}

function Contact() {
  return (
    <div style={{ ...pageStyle, background: '#3a3222ff', color: 'white', }}>
      <h2>Contact</h2>
      <p>Email: esimerkki@email.com</p>
      <p>Address: Esimerkkikatu 123, Tampere 12345</p>
    </div>
  );
}

// Navbar
function Navbar() {
  const linkStyle = {
    color: 'white',
    margin: '10px',
    textDecoration: 'none',
    paddingBottom: '2px',
  };

  const activeStyle = {
    color: 'yellow',
    borderBottom: '2px solid yellow',
  };

  return (
    <nav style={{ background: '#333', padding: '10px', minWidth: '100vw'}}>
      <NavLink
        to="/"
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}
      >
        Contact
      </NavLink>
    </nav>
  );
}

// Main App
function App() {
  return (
    <Router>
      <Navbar />
      <div style={{
        minHeight: '100vh',
        minWidth: '100vw',
        padding: '20px',
        background: '#898989ff',
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
