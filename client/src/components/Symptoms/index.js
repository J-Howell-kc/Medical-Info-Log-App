import React, { useReducer} from "react";
import { useState} from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { useMutation, useQuery} from "@apollo/client";
import { ADD_SYMPTOMS } from "../../utils/mutations";
import { QUERY_USER } from "../../utils/queries";
import {ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Auth from '../../utils/auth';

// const { RangePicker } = DatePicker;
const { TextArea } = Input;
const Symptoms = () => {
  // const [symptoms, setSymptoms] = useState("");

  const [form] = Form.useForm();
const [addSymptoms] = useMutation(ADD_SYMPTOMS);

// const handleChange = (event) => {
//   console.log(event);
//   if (!event.target?.description  || !event.target?.symptom || !event.target?.date || !event.target?.datestartstop || !event.target?.intensity || !event.target?.actiontaken) {
//     return false;
//   }else {
//   const { symptom, description, intensity, date, actiontaken, dateStartStop } = event.target;
  

//   setSymptoms(
//     ...symptoms,
//     symptom, description, intensity, date, actiontaken, dateStartStop,
//   );
// }
// };

// const onFinish = async (event) => {
//   console.log(symptoms);

//   try {
//     const { data } = await addSymptoms({
//       variables: { ...symptoms },
//     });
//     console.log(data);
//   } catch (e) {
//     console.error(e);
//   }

//   setSymptoms("");
// }
const onFinish = async(values) => {
await addSymptoms({
variables: {
...values,
date: values.date.format("YYYY-MM-DD"),
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
        <Form.Item label="Symptom" name = "symptom" labelWrap>
          <Input placeholder = "Symptom" />
        </Form.Item>

        <Form.Item label="Date" name = "date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date Start/Stop" name = "dateStartStop">
          <Input placeholder = "Enter start and stop dates here."/>
        </Form.Item>

        <Form.Item label="Description" name = "description" labelWrap>
          <TextArea rows={8} placeholder = "Describe your symptom here."/>
        </Form.Item>
        <Form.Item label="Intensity (1-10)" name = "intensity">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item label="Action taken:" name = "actionTaken" labelWrap>
          <TextArea rows={8} placeholder = "Enter actions taken here."/>
        </Form.Item>

        {/* <Form.Item
          label="Photo"
          style={{ marginTop: "30px" }}
          valuePropName="fileList"
        > */}
          {/* <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
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
      </Form>
      
    </>
  );
};

export default Symptoms;
