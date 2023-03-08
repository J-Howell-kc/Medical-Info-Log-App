import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_NUTRITION } from "../../utils/mutations";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Nutrition = () => {
  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Meal 1" labelWrap>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Meal 2" labelWrap>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Meal 3" labelWrap>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Snacks/Other" labelWrap>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time(s)" labelWrap>
          <Input />
        </Form.Item>
        <Form.Item label="Drinks" labelWrap>
          <TextArea rows={4} />
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

export default Nutrition;
