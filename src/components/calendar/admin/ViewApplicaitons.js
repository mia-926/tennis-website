
import React, { useEffect, useRef, useState} from 'react';
import './admin.css';
import {Table, Button} from "antd";
import "../../../components/instructorSignUp/instructor.css"
import { GreenCircles } from '../../account/GreenCircles';

export const ViewApplication = (props) => {
    const [firstName, setFirstName] = useState("");

    const dummyData = [
        {
          key: '1',
          name: 'John Doe',
          email: 'johndoe@example.com',
          position: 'Junior Instructor'
        },
        {
          key: '2',
          name: 'Jane Smith',
          email: 'janesmith@example.com',
          position:"Senior Instructor",
        },
        {
          key: '3',
          name: 'Emily Johnson',
          email: 'emilyjohnson@example.com',
          position: "Junior Instructor"
        },
      ];
      
      const [data, setData] = useState(dummyData);
      
    // const fetchDoctorData = async () => {
    //     const res = await getDoctorPatientApi();
    //     setData(res);
    // }
    // const fetchDoctorName = async () => {
    //     const res = await getDoctorNameApi();
    //     setFirstName(res);
    //}
    // useEffect(() => {
 
    //     fetchDoctorData();
    //     fetchDoctorName();
      
    // },[]);

    console.log(data)
    const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          responsive: ["sm", "md", "lg", "xl"],
          render: (name) => <h4 className="text-[15px]">{name}</h4>,
        },
        {
            title: "Email Address",
            dataIndex: "email",
            key: "email",
            responsive: ["sm", "md", "lg", "xl"],
            render: (name) => <h4 className="text-[15px]">{name}</h4>,
          },        {
            title: "Position",
            dataIndex: "position",
            key: "position",
            responsive: ["sm", "md", "lg", "xl"],
            render: (position) => <h4 className="text-[15px]">{position}</h4>,
          },
          {
            render: () => {
              // Calculate the fraction
              
              return (
                <div>
                
                  <Button
                  className='view-application-button'
                  onClick={() => window.location.href = "/filled-application"}
                  >
                    View Application
                  </Button>
                </div>
              );
            },
          },
    ]
    

    const handleRowClick = (record) => {
       window.location.href = '/patientDoctorPortal'; 
    };
    

    return(
        <div>
            <GreenCircles/>
        <div className='instructor-flex-col' style={{paddingLeft:'130px', paddingTop:"130px"}}>
            <div>
                <h1>VIEW APPLICATIONS</h1>
            </div>
            <div style={{width:"70%"}}>
            {data && (
                    <Table
                    
                    columns={columns}
                    dataSource={data}
            
                    
                    />
                )}

            </div>
        </div>
        </div>
    );
    

}