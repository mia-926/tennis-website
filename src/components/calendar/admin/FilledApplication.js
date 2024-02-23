import React, { useState } from 'react';
import "../../../components/instructorSignUp/instructor.css";

export const FilledApplication = () => {
    const initialFormState = {
        lastName: '',
        firstName: '',
        dateOfBirth: '',
        age: '',
        utr: '',
        emailAddress: '',
        phoneNumber: '',
        school: '',
        teachingExperience: '',
        reason: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Replace console.log with your form submission logic

        // Reset form data to initial state to clear the form
        setFormData(initialFormState);
    };

    return (
        <form className='instructor-flex-col main-font' style={{padding:"130px 50px 20px"}} onSubmit={handleSubmit}>
            <h1 className='application-instructor-title'>Application Form: Jr. Instructor</h1>
            <div className='instructor-flex-row' style={{width:"100%", justifyContent:"space-between"}}>
                <div className='instructor-flex-col' style={{alignContent:"space-between",flex:2}}>
                    <div className='application-position-box'>
                        <div>
                            <p style={{fontSize:"20px", marginTop:20, marginLeft:45}}>APPLICANT INFORMATION: EMILY JOHNSON</p>
                        </div>
                        <div className='instructor-flex-row' style={{justifyContent:"space-around"}}>
                            {/* first column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>Last Name</label>
                                <input placeholder="Johnson"className="form-input-box" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                <label>Date of Birth</label>
                                <input placeholder="09/26/2005" className="form-input-box" />
                                <label>Age</label>
                                <input placeholder="18" className="form-input-box" type="number" name="age" value={formData.age} onChange={handleChange} />
                                <label>UTR (if applicable)</label>
                                <input placeholder="8.2" className="form-input-box" type="text" name="utr" value={formData.utr} onChange={handleChange} />
                            </div>
                            {/* second column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>First Name</label>
                                <input placeholder="Emily" className="form-input-box"type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                <label>Email Address</label>
                                <input placeholder="emilyjohnson@example.com" className="form-input-box" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                                <label>Phone Number</label>
                                <input placeholder="8053378212" className="form-input-box" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                <label>School (if student)</label>
                                <input placeholder="Thousand Oaks" className="form-input-box" type="text" name="school" value={formData.school} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='instructor-flex-col application-position-box' style={{marginTop:20}}>
                        <label>Any past teaching experience? If so, please list below:</label>
                        <textarea placeholder="Yes, I have done private lessons for family and friend for the last two years."style={{margin:20, height:"100%", padding:20}}name="teachingExperience" value={formData.teachingExperience} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className='instructor-flex-col' style={{flex: 1}}>
                    <div className='application-position-box instructor-flex-center' >
                        <label style={{paddingTop:10}}>Why do you want to volunteer with WTA?</label>
                    <textarea placeholder='I have been looking for ways to give back to my community and this seems like a perfect opportunity!' style={{height:"300px", width:"80%", margin:20, padding:20}} name="reason" value={formData.reason} onChange={handleChange}></textarea>

                    </div>
                    <div className='instructor-flex-row' style={{justifyContent:"space-around"}}>
                <button type="submit" className='application-button-accept'>
                            Accept
                 </button>
                 <button type="submit" className='application-button-reject'>
                            Reject
                 </button>
            </div>
                </div>
                
            </div>
           
        </form>
    );
}
