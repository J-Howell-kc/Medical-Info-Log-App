import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, InputNumber, Upload } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_SYMPTOMS } from "../../utils/mutations";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Symptoms = () => {
  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="Symptom" labelWrap>
          <Input placeholder = "Symptom" />
        </Form.Item>

        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date Start/Stop">
          <RangePicker />
        </Form.Item>

        <Form.Item label="Description" labelWrap>
          <TextArea rows={8} placeholder = "Describe your symptom here."/>
        </Form.Item>
        <Form.Item label="Intensity (1-10)">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item label="Action taken:" labelWrap>
          <TextArea rows={8} placeholder = "Enter actions taken here."/>
        </Form.Item>

        <Form.Item
          label="Photo"
          style={{ marginTop: "30px" }}
          valuePropName="fileList"
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
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
