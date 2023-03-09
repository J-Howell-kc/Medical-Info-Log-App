import { useState } from "react";
import { Row, Space, Form, Input, Button, Table } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MEDICATION } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import Auth from '../../utils/auth';

const Medications = () => {
  const [medications, setMedications] = useState([]);

  const [addMedication] = useMutation(ADD_MEDICATION);
  
  // const [form] = Form.useForm()
  const { loading, data } = useQuery(QUERY_USER);
  console.log(data)
  
  const handleChange = (event) => {
    console.log(event);
    const { name, value } = event.target;
      
      
      setMedications({
        ...medications,
        [name]: value
  });
    
  };
  
  const onFinish = async (event) => {
    console.log(medications);
    
    try {
       
      
      const { data } = await addMedication({
        variables: { ...medications },
      });
      Auth.login(data.login.token);
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
    }
  ];

  return (
    <>
      <Form onValuesChange={handleChange} onFinish={onFinish}>
        <Row className="mt-5 ml-3">
          <Space>
            <Form.Item label="Medication Name" name="medicationname">
              <Input name='medicationName' />
            </Form.Item>
            <Form.Item label="Dosage" name="dosage">
              <Input name='dosage'/>
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
