import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, TreeSelect } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_EMERGENCYCONTACT } from "../../utils/mutations";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Emergencycontacts = () => {
  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Relationship">
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

        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email">
          <Input />
        </Form.Item>
        <Form.Item label="Address" labelWrap>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Notes" labelWrap>
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

export default Emergencycontacts;
