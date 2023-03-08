import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_NUTRITION } from "../../utils/mutations";

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
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Meal 1" labelWrap>
          <TextArea rows={4} placeholder="Enter breakfast information here."/>
        </Form.Item>
        <Form.Item label="Time">
          <Input placeholder =" Enter time of Breakfast here."/>
        </Form.Item>
        <Form.Item label="Meal 2" labelWrap>
          <TextArea rows={4} placeholder = "Enter lunch details here."/>
        </Form.Item>
        <Form.Item label="Time">
          <Input placeholder = "Enter time of lunch here."/>
        </Form.Item>
        <Form.Item label="Meal 3" labelWrap>
          <TextArea rows={4} placeholder = "Enter details of dinner here."/>
        </Form.Item>
        <Form.Item label="Time">
          <Input placeholder = "Enter time of dinner here." />
        </Form.Item>
        <Form.Item label="Snacks/Other" labelWrap>
          <TextArea rows={4} placeholder = "Enter snacks and other foods consumed today here."/>
        </Form.Item>
        <Form.Item label="Time(s)" labelWrap>
          <Input placeholder = "Enter time(s) of snack(s) here."/>
        </Form.Item>
        <Form.Item label="Drinks" labelWrap>
          <TextArea rows={4} placeholder = "Enter drinks information here. Remember to drink plenty of water!"/>
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
