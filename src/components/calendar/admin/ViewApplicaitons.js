import React, { useEffect, useState } from 'react';
import { Button, Table, Modal } from "antd";
import { GreenCircles } from '../../account/GreenCircles';
import { getAllApplications } from "../../../api/api";
import { FilledApplication } from './FilledApplication';
import './admin.css';
import "../../../components/instructorSignUp/instructor.css";

export const ViewApplication = () => {
    const [isViewing, setIsViewing] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
          const result = await getAllApplications();
          setData(result);
      };
      fetchData();
  }, [reload]);  // dependency on reload state to refetch data

  const columns = [
      {
          title: "Name",
          dataIndex: "firstName",
          key: "name",
          responsive: ["sm"],
          render: text => <h4 className="text-[15px]">{text}</h4>,
      },
      {
          title: "Email Address",
          dataIndex: "email",
          key: "email",
          responsive: ["sm"],
          render: text => <h4 className="text-[15px]">{text}</h4>,
      },
      {
          title: "Position",
          dataIndex: "type",
          key: "position",
          responsive: ["sm"],
          render: text => <h4 className="text-[15px]">{text}</h4>,
      },
      {
          key: "action",
          render: (_, record) => (
              <Button
                  className='view-application-button'
                  onClick={() => {
                      setSelectedRow(record);  // Update selectedRow state
                      setIsViewing(true);
                  }}
              >
                  View Application
              </Button>
          ),
      },
  ];

  const handleCancel = () => {
      setIsViewing(false);
      setReload(!reload);  // toggle reload state to refetch data on modal close
  };

    if(window.innerWidth>1500){
      return (
        <div className='instructor-flex-col' style={{paddingLeft: '130px', paddingTop: "130px"}}>

        <h1>VIEW APPLICATIONS</h1>
        <Table
            columns={columns}
            dataSource={data}
            rowKey="id"  // Assuming each data entry has a unique 'id'
        />
        <Modal
            title="Application Details"
            visible={isViewing}
            onCancel={handleCancel}
            width={800}
            footer={null}
        >
            {selectedRow && <FilledApplication key={selectedRow.id} user={selectedRow} />}
        </Modal>
    </div>
    );
    }
    else{ return (
      <div className='instructor-flex-col' style={{paddingLeft: '130px', paddingTop: "130px"}}>
            <GreenCircles />
            <h1>VIEW APPLICATIONS</h1>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"  // Assuming each data entry has a unique 'id'
            />
            <Modal
                title="Application Details"
                visible={isViewing}
                onCancel={handleCancel}
                width={800}
                footer={null}
            >
                {selectedRow && <FilledApplication key={selectedRow.id} user={selectedRow} />}
            </Modal>
        </div>
    );
};}
