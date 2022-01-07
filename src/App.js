import React from 'react';
import AppHeader from './Components/HeaderComponents/Main-Component/AppHeader'
import SideMenu from './Components/SideNavigationBar/SideMenu';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//Mock Components for Navbar Trial
const Dashboard = () => {
    return <h1>Dashboard</h1>
}

const Content = () => {
    return <h1>Dashboard</h1>
}

const Courses = () => {
    return <h1>Dashboard</h1>
}

const Videos = () => {
    return <h1>Dashboard</h1>
}

const Documentation = () => {
    return <h1>Dashboard</h1>
}

const Design = () => {
    return <h1>Dashboard</h1>
}

const Error = () => {
    return <h1>Error</h1>
}

function App() {
    return <Router>
        <AppHeader />
        <SideMenu />

        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/content" element={<Content />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/design" element={<Design />} />


            {/* If path is not found we should go to Error Page */}
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
}

export default App;
