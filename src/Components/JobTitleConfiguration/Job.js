import React, { useEffect, useState } from "react";
import './index.css'

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
        console.log(jobs);
    }

    return <React.Fragment>
        <div className="body">
            <div className="top-section">
                <div className="text-group">
                    <p className="title-text">HR CONFIGURATION <span className="sub-title-text">Job Title</span></p>
                </div>

                <div className="btn-group">
                    <button className="btn-add-job-title">New Job Title</button>
                </div>
            </div>
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
                                {/* <td>{console.log(id)}</td>
                                <td>{console.log(Name)}</td>
                                <td>{console.log(Description)}</td>
                                <td>{console.log(category)}</td> */}
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
            {/* <div className="table-section">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Durgesh</td>
                            <td>gdurgesh10@gmail.com</td>
                            <td>Nepal</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Aayush</td>
                            <td>xakkaaayush@gmail.com</td>
                            <td>Blue Diamond Society</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sagar</td>
                            <td>gandusagar@gmail.com</td>
                            <td>Nepal</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sushil</td>
                            <td>balebalma@gmail.com</td>
                            <td>Nepal</td>
                        </tr>
                    </tbody>
                </table>
            </div> */}
        </div>
    </React.Fragment>
}

export default Job;