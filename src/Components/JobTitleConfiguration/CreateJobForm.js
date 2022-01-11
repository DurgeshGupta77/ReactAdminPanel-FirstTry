import React, { useState } from "react";
import TitleComponent from "./SubComponent/TitleComponent";


const CreateJobForm = () => {

    // const [formFields, setFormFields] = useState({ jobTitleName: '', jobTitleDescription: '', jobTitleResponsibility: '' });
    const [names, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCatrgory] = useState("");

    const handleForm = async (e) => {
        console.log("Handle Form");
        e.preventDefault();
        const data = { names, description, category };
        await fetch('http://127.0.0.1:8000/api/v1/setup/job-title/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, /',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => {
            console.log("New Job Title added");
            console.log(JSON.stringify(data));
        }).catch(() => {
            console.log("Some Error Occoured");
        })

        // if (formFields["jobTitleName"] && formFields["jobTitleDescription"] && formFields["jobTitleResponsibility"]) {

        // }
        // else {
        //     alert("Please Add Data to Proceed!");
        // }
    }
    return <React.Fragment>
        <div className="body">
            <TitleComponent to={"/job-title"} text={"View List"} />

            <div className="form-container">
                <div className="title-holder">
                    <p>JOB TITLE DETAILS</p>
                </div>

                <form onSubmit={handleForm}>

                    <div className="controlled-form">
                        <label htmlFor="jobTitleName">Name: <span>*</span></label>
                        <input autoComplete="off" required type="text" id="jobTitleName" name="jobTitleName" value={names}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="controlled-form">
                        <label htmlFor="jobTitleDescription">Description:</label>
                        <input autoComplete="off" type="text" id="jobTitleDescription" name="jobTitleDescription" value={description}
                            onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className="controlled-form">
                        <label htmlFor="jobTitleResponsibility">Responsibility:</label>
                        <input autoComplete="off" type="text" id="jobTitleResponsibility" name="jobTitleResponsibility" value={category}
                            onChange={(e) => setCatrgory(e.target.value)} />
                    </div>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </React.Fragment>
}

export default CreateJobForm;