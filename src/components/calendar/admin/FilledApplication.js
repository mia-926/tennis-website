import React, { useState } from 'react';
import "../../../components/instructorSignUp/instructor.css";

export const FilledApplication = (props) => {
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

    const [formData, setFormData] = useState(props.user);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        });
    };
    
console.log(props.user)
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
            <h1 className='application-instructor-title'>Application Form: {props.user.type}</h1>
            <div className='instructor-flex-row' style={{width:"100%", justifyContent:"space-between"}}>
                <div className='instructor-flex-col' style={{alignContent:"space-between",flex:2}}>
                    <div className='application-position-box'>
                        <div>
                            <p style={{fontSize:"20px", marginTop:20, marginLeft:45}}>APPLICANT INFORMATION: {props.user.firstName}</p>
                        </div>
                        <div className='instructor-flex-row' style={{justifyContent:"space-around"}}>
                            {/* first column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>Last Name</label>
                                <input placeholder={props.user.lastName}className="form-input-box" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                                <label>Date of Birth</label>
                                <input placeholder={formatDate(props.user.dob)} className="form-input-box" />
                                <label>Age</label>
                                <input placeholder={props.user.age} className="form-input-box" type="number" name="age" value={formData.age} onChange={handleChange} />
                                <label>UTR (if applicable)</label>
                                <input placeholder={props.user.utr} className="form-input-box" type="text" name="utr" value={formData.utr} onChange={handleChange} />
                            </div>
                            {/* second column */}
                            <div className='instructor-flex-col' style={{width:"40%"}}>
                                <label>First Name</label>
                                <input placeholder={props.user.firstName}className="form-input-box"type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                                <label>Email Address</label>
                                <input placeholder={props.user.email} className="form-input-box" type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                                <label>Phone Number</label>
                                <input placeholder={props.user.phone} className="form-input-box" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                                <label>School (if student)</label>
                                <input placeholder={props.user.school} className="form-input-box" type="text" name="school" value={formData.school} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className='instructor-flex-col application-position-box' style={{marginTop:20}}>
                        <label>Any past teaching experience? If so, please list below:</label>
                        <textarea placeholder={props.user.experience} style={{margin:20, height:"100%", padding:20}}name="teachingExperience" value={formData.teachingExperience} onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className='instructor-flex-col' style={{flex: 1}}>
                    <div className='application-position-box instructor-flex-center' >
                        <label style={{paddingTop:10}}>Why do you want to volunteer with WTA?</label>
                    <textarea placeholder={props.user.why} style={{height:"300px", width:"80%", margin:20, padding:20}} name="reason" value={formData.reason} onChange={handleChange}></textarea>

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
