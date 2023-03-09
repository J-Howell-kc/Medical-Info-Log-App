// import { useState } from "react";
import { Row, Space, Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION } from "../../utils/mutations";
// import Auth from '../../utils/auth';

const Medications = () => {
  const [form] = Form.useForm();

  const [addMedication] = useMutation(ADD_MEDICATION);
  // const handleChange = (event) => {
  //   console.log(event);
  //   const { name, value } = event.target;

  //     setMedications({
  //       ...medications,
  //       [name]: value
  // });

  // };

  const onFinish = async (values) => {
    await addMedication({
      variables: {
        ...values,
      },
    });
    form.resetFields();
  };

  // setMedications((pre) => {
  //   return [...pre, data];
  // }
  // );
  // console.log(setMedications)

  // const columns = [
  //   {
  //     key: "1",
  //     title: "Medication Name",
  //     dataIndex: "medicationname",
  //   },
  //   {
  //     key: "2",
  //     title: "Dosage",
  //     dataIndex: "dosage",
  //   }
  // ];

  return (
    <>
      <Form onFinish={onFinish}>
        <Row className="mt-5 ml-3">
          <Space>
            <Form.Item label="Medication Name" name="medicationName">
              <Input name="medicationName" />
            </Form.Item>
            <Form.Item label="Dosage" name="dosage">
              <Input name="dosage" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Space>
        </Row>
      </Form>

      {/* <Table columns={columns} dataSource={medications}></Table> */}
    </>
  );
};

export default Medications;
