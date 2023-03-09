import { useState } from "react";
import { Row, Space, Form, Input, Button, Table } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MEDICATION } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
// import Auth from '../../utils/auth';

const Medications = () => {
  const [medications, setMedications] = useState("");

  const [addMedication] = useMutation(ADD_MEDICATION);
  
  // const [form] = Form.useForm()
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data)
  
  const handleChange = (event) => {
    console.log(event);
    if (!event.target?.medicationname || !event.target?.dosage) {
      return false;
    }else {
      const { medicationname, dosage } = event.target;
      
      
      setMedications([
        ...medications,
        { medicationName: medicationname, dosage: dosage },
      ]);
    }
  };
  
  const onFinish = async (event) => {
    console.log(medications);
    
    try {
      
      const { data } = await addMedication({
        variables: { ...medications },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }

    // setMedications((pre) => {
    //   return [...pre, data];
    // }
    // );
    // console.log(setMedications)
  };

  const onDeleteRecord = (record) => {
    console.log(record);
    setMedications((pre) => {
      return pre.filter(
        (item) => item.medicationname !== record.medicationname
      );
    });
  };

  const columns = [
    {
      key: "1",
      title: "Medication Name",
      dataIndex: "medicationname",
    },
    {
      key: "2",
      title: "Dosage",
      dataIndex: "dosage",
    },
    {
      key: "3",
      title: "Action",
      render: (record) => (
        <Space size="middle">
          <div onClick={onDeleteRecord} style={{ color: "red" }}>
            Delete
          </div>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Form onValuesChange={handleChange} onFinish={onFinish}>
        <Row className="mt-5 ml-3">
          <Space>
            <Form.Item label="Medication Name" name="medicationname">
              <Input />
            </Form.Item>
            <Form.Item label="Dosage" name="dosage">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Space>
        </Row>
      </Form>

      <Table columns={columns} dataSource={medications}></Table>
    </>
  );
};

export default Medications;
