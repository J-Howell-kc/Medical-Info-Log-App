import { Row, Space, Form, Input, Button } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION } from "../../utils/mutations";

const Medications = () => {
  const [form] = Form.useForm();

  const [addMedication] = useMutation(ADD_MEDICATION);

  const onFinish = async (values) => {
    await addMedication({
      variables: {
        ...values,
      },
    });
    form.resetFields();
  };


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
    </>
  );
};

export default Medications;
