import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_NUTRITION } from "../../utils/mutations";

const { TextArea } = Input;

const Nutrition = () => {
  const [form] = Form.useForm();
  const [addNutrition] = useMutation(ADD_NUTRITION);

  const onFinish = async (values) => {
    await addNutrition({
      variables: {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
      },
    });
    form.resetFields();
  };
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

        <Form.Item label="Meal 1" name = "meal 1" labelWrap>
          <TextArea rows={4} placeholder="Enter breakfast information here."/>
        </Form.Item>
        <Form.Item label="Time" name = "time 1">
          <Input placeholder =" Enter time of Breakfast here."/>
        </Form.Item>
        <Form.Item label="Meal 2" name =  "meal 2" labelWrap>
          <TextArea rows={4} placeholder = "Enter lunch details here."/>
        </Form.Item>
        <Form.Item label="Time" name = "time 2">
          <Input placeholder = "Enter time of lunch here."/>
        </Form.Item>
        <Form.Item label="Meal 3" name = "meal 3"labelWrap>
          <TextArea rows={4} placeholder = "Enter details of dinner here."/>
        </Form.Item>
        <Form.Item label="Time" name = "time 3">
          <Input placeholder = "Enter time of dinner here." />
        </Form.Item>
        <Form.Item label="Snacks/Other" name = "snacks" labelWrap>
          <TextArea rows={4} placeholder = "Enter snacks and other foods consumed today here."/>
        </Form.Item>
        <Form.Item label="Time(s)" name = "time 4"labelWrap>
          <Input placeholder = "Enter time(s) of snack(s) here."/>
        </Form.Item>
        <Form.Item label="Drinks" name = "drinks" labelWrap>
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
