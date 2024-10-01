import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from "./components/Header";
import Reservations from "./pages/Reservations";
import Vehicles from "./pages/Vehicles";
import Footer from "./components/Footer";
import Locations from "./pages/Locations";
import CustomerSupport from "./pages/CustomerSupport";
import Blog from "./pages/Blog";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/customer-support" element={<CustomerSupport />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;