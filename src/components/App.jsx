import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './navbar/Navbar';
import Contact from './Team/Team';
import Gallery from './Gallery/Gallery';
import Footer from './Footer/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/team" exact element={<Contact />} />
                <Route path="/gallery" exact element={<Gallery />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
