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
        date: values.date.format("YYYY-MM-DD")
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
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        <Form.Item label="Date" name="date">
          <DatePicker />
        </Form.Item>


        <Form.Item label="Meal 1" name="breakfast" labelWrap>
          <TextArea rows={4} placeholder="Enter breakfast information here."/>
        </Form.Item>
        <Form.Item label="Time" name="breakTime">
          <Input placeholder =" Enter time of Breakfast here."/>
        </Form.Item>
        <Form.Item label="Meal 2" name="lunch" labelWrap>
          <TextArea rows={4} placeholder = "Enter lunch details here."/>
        </Form.Item>
        <Form.Item label="Time" name="lunchTime">
          <Input placeholder = "Enter time of lunch here."/>
        </Form.Item>
        <Form.Item label="Meal 3" name="dinner" labelWrap>
          <TextArea rows={4} placeholder = "Enter details of dinner here."/>
        </Form.Item>
        <Form.Item label="Time" name="dinnerTime">
          <Input placeholder = "Enter time of dinner here." />
        </Form.Item>
        <Form.Item label="Snacks/Other" name="snack" labelWrap>
          <TextArea rows={4} placeholder = "Enter snacks and other foods consumed today here."/>
        </Form.Item>
        <Form.Item label="Time(s)" name="snackTime" labelWrap>
          <Input placeholder = "Enter time(s) of snack(s) here."/>
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
