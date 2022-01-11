import React from 'react';
import AppHeader from './Components/HeaderComponents/Main-Component/AppHeader'
import SideMenu from './Components/SideNavigationBar/SideMenu';
import Job from './Components/JobTitleConfiguration/Job';
import CreateJobForm from './Components/JobTitleConfiguration/CreateJobForm';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



//Mock Components for Navbar Trial
const Dashboard = () => {
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

const Error = () => {
    return <h1>Error</h1>
}

function App() {
    return <Router>
        <AppHeader />
        <SideMenu />

        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/job-title" element={<Job />} />
            <Route path="/job-title/add" element={<CreateJobForm />} />


            {/* If path is not found we should go to Error Page */}
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
}

export default App;
