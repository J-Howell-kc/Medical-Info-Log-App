import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_ALLERGIES } from "../../utils/mutations";

const { TextArea } = Input;

const Allergies = () => {
  //   const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{
          maxWidth: 600,
          marginTop: "50px",
          placeholder: "Enter allergies here.",
        }}
      >
        <Form.Item label="Allergies">
          <TextArea rows={12} />
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
