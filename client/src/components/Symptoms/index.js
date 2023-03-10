import { Form, Input, Button, DatePicker, InputNumber } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_SYMPTOMS } from "../../utils/mutations";

const { TextArea } = Input;
const Symptoms = () => {
  const [form] = Form.useForm();
  const [addSymptoms] = useMutation(ADD_SYMPTOMS);

  const onFinish = async (values) => {
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
      <Form
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="Symptom" name="symptom" labelWrap>
          <Input placeholder="Symptom" />
        </Form.Item>

        <Form.Item label="Date" name="date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date Start/Stop" name="dateStartStop">
          <Input placeholder="Enter start and stop dates here." />
        </Form.Item>

        <Form.Item label="Description" name="description" labelWrap>
          <TextArea rows={8} placeholder="Describe your symptom here." />
        </Form.Item>
        <Form.Item label="Intensity (1-10)" name="intensity">
          <InputNumber min={1} max={10} />
        </Form.Item>
        <Form.Item label="Action taken:" name="actionTaken" labelWrap>
          <TextArea rows={8} placeholder="Enter actions taken here." />
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
