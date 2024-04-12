import React, { useState } from 'react';
import "./instructor.css"; // Ensure your CSS path is correct
import { addApplication } from "../../../src/api/api";

export const AdvertismentApplication = () => {
    const initialFormState = {
        type:'Advertising Manager',
        lastName: '',
        firstName: '',
        dob: '',
        age: '',
        utr: '',
        email: '',
        phone: '',
        school: '',
        experience: '',
        why: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handleSubmit = async() => {
        console.log('Form Data:', formData);
        const pendingUserResponse = await addApplication(formData);
        // Replace console.log with your form submission logic

        // Reset form data to initial state to clear the form
        setFormData(initialFormState);
        window.location.href = "/instructor-signup"
    };

    return (
        <form className='instructor-flex-col main-font' style={{padding:"130px 50px 20px"}} onSubmit={handleSubmit}>
            <h1 className='application-instructor-title'>Application Form: Advertising Manager</h1>
            <div className='instructor-flex-row' style={{width:"100%", justifyContent:"space-between"}}>
                <div className='instructor-flex-col' style={{alignContent:"space-between",flex:2}}>
                    <div className='application-position-box'>
                        <div>
                            <p style={{fontSize:"20px", marginTop:20, marginLeft:45}}>APPLICANT INFORMATION</p>
                        </div>
                        <div className='instructor-flex-row' style={{justifyContent:"space-around"}}>
                            {/* first column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>Last Name</label>
                                <input className="form-input-box" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                <label>Date of Birth</label>
                                <input className="form-input-box" type="date" name="dob" value={formData.dob} onChange={handleChange} />
                                <label>Age</label>
                                <input className="form-input-box" type="number" name="age" value={formData.age} onChange={handleChange} />
                                <label>UTR (if applicable)</label>
                                <input className="form-input-box" type="text" name="utr" value={formData.utr} onChange={handleChange} />
                            </div>
                            {/* second column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>First Name</label>
                                <input className="form-input-box"type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                <label>Email Address</label>
                                <input className="form-input-box" type="email" name="email" value={formData.email} onChange={handleChange} />
                                <label>Phone Number</label>
                                <input className="form-input-box" type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                                <label>School (if student)</label>
                                <input className="form-input-box" type="text" name="school" value={formData.school} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='instructor-flex-col application-position-box' style={{marginTop:20}}>
                        <label>Any past teaching experience? If so, please list below:</label>
                        <textarea style={{margin:20, height:"100%"}}name="experience" value={formData.experience} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className='instructor-flex-col' style={{flex: 1}}>
                    <div className='application-position-box instructor-flex-center' >
                        <label style={{paddingTop:10}}>Why do you want to volunteer with WTA?</label>
                        <textarea style={{height:"300px", width:"80%", margin:20}} name="why" value={formData.why} onChange={handleChange}></textarea>

                    </div>
                    <button type="submit" className='application-button-submit' onClick={() => handleSubmit()}>
                            Submit
                            
                        </button>
                </div>
            </div>
        </form>
    );
}
