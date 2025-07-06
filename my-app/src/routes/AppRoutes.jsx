import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Personal from '../pages/Personal';
import Login from '../pages/Login';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default AppRoutes