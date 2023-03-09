import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, TreeSelect } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_EMERGENCYCONTACT } from "../../utils/mutations";
import {ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Auth from '../../utils/auth';

const { TextArea } = Input;

const Emergencycontacts = () => {
  const [form] = Form.useForm();
  const [addEmergencyContact] = useMutation(ADD_EMERGENCYCONTACT);
  
  const onFinish = async (values) => {
    await addEmergencyContact({
      variables: {
        ...values,
      },
    });
    form.resetFields();
  };

  return (
    <>
      <Form onFinish = {onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="First Name" name = 'firstName'>
          <Input placeholder="Contact name" />
        </Form.Item>
        <Form.Item label="Last Name" name = 'lastName'>
          <Input placeholder="Contact name" />
        </Form.Item>

        <Form.Item label="Relationship" name = 'relationship'>
          <TreeSelect
            treeData={[
              { title: "Spouse/Partner", value: "spouse" },
              { title: "Parent", value: "parent" },
              { title: "Sibling", value: "sibling" },
              { title: "Child", value: "child" },
              { title: "Other Family Member", value: "otherfamily" },
              { title: "Other", value: "other" },
            ]}
          />
        </Form.Item>

        <Form.Item label="Phone" name= 'phone'>
          <Input placeholder="Phone" />
        </Form.Item>
        {/* <Form.Item label="Email" name>
          <Input placeholder="Email" />
        </Form.Item> */}
        <Form.Item label="Address" name = 'address' labelWrap>
          <TextArea rows={4} placeholder="Address" />
        </Form.Item>
        {/* <Form.Item label="Notes" labelWrap>
          <TextArea rows={4} placeholder="Notes" />
        </Form.Item> */}
        <Form.Item label="Submit">
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "12px" }}
          >
            Submit
          </Button>
        </Form.Item>
        {/* onSubmit={handleFormSubmit}
        onChange={(event) => setEmergencycontacts(event.target.value)} */}
      </Form>
    </>
  );
};

// const [addEmergencycontacts, { error }] = useMutation(ADD_EMERGENCYCONTACT);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Execute mutation and pass in defined parameter data as variables
//       const { data } = await addEmergencycontacts({
//         variables: { name },
//       });

//       window.location.reload();
//     } catch (err) {
//       console.error(err);
//     }
//   };

export default Emergencycontacts;
