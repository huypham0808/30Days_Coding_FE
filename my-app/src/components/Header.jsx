import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'; // Assuming you have some styles in App.css

export default function Header() {
    return (
        <header className='flex justify-between items-center p-4 bg-blue-500 text-white'>
            <h2 className='todo-Logo'>📝 Todo App</h2>
            <nav className='navbar'>
                <Link to="/" style={{ marginRight: '15px', textDecoration: "none", fontWeight: "bold" }}>Today task</Link>
                <Link to="/projects" style={{ marginRight: '15px' }}>Schedule task</Link>
                <Link to="/personal" style={{ marginRight: '15px' }}>Personal</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    )
}
