import { useReducer} from "react";
import { useState} from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { useMutation, useQuery} from "@apollo/client";
import { ADD_ALLERGIES } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import {ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Auth from '../../utils/auth';

const { TextArea } = Input;
const Allergies = () => {

const [form] = Form.useForm();
const [addAllergies] = useMutation(ADD_ALLERGIES);

const onFinish = async(values) => {
  await addAllergies({
  variables: {
  ...values,
  },
  });
  form.resetFields();
  };

return (
    <>
      <Form onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{
          maxWidth: 600,
          marginTop: "50px",
          placeholder: "Enter allergies here.",
        }}
      >
        <Form.Item label="Allergies" name="triggers" labelWrap>
          <TextArea rows={12} placeholder = "Enter all known allergies here."/>
        </Form.Item>

        <Form.Item label="Submit">
          <Button
            type="primary"
            style={{ marginTop: "12px" }}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Allergies;
