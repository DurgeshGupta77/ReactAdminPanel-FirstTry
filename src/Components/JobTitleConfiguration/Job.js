import React, { useEffect, useState } from "react";
import './index.css'
import TitleComponent from "./SubComponent/TitleComponent";

const Job = () => {
    const url = 'http://127.0.0.1:8000/api/v1/setup/job-title/';
    const [job, setJob] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(url);
        const jobs = await response.json();
        setJob(jobs);
    }

    const topSectionData = [
        {
            to: '/job-title/add',
            text: 'New Job Title'
        }
    ];

    return <React.Fragment>
        <div className="body">
            <TitleComponent to={topSectionData[0].to} text={topSectionData[0].text} />
            <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {job.map((jobTitle) => {
                            const { id, Name, Description, category } = jobTitle;
                            return <tr key={id}>
                                <td>{id}</td>
                                <td>{Name}</td>
                                <td>{Description}</td>
                                <td>{category}</td>
                                <td style={{ width: '150px' }}>
                                    <div>
                                        <button style={{ marginRight: '15px' }}>Update</button>
                                        <button>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </React.Fragment>
}

export default Job;