import { Button, Form, Input, DatePicker } from "antd";
import ADD_WEIGHT from "../../utils/mutations";
import ADD_USER from "../../utils/mutations";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";

const onFinish = (values) => {
  
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit");
};

const Biovitals = () => {
  return (
    <div className="mt-5">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row span={24}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                {
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input
              // placeholder={user.name}
              />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                {
                  message: "Please input your Last Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  message: "Please input your Address!",
                },
              ]}
            >
              <Input className="mb-3" />
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phonenumber"
              rules={[
                {
                  message: "Please input your Phone Number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            ></Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Date of Birth" name="dateofbirth">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              label="Height"
              name="Height"
              rules={[
                {
                  message: "Please input your Height!",
                },
              ]}
            >
              <Input suffix="in." />
            </Form.Item>

            <Form.Item
              label="Weight"
              name="weight"
              rules={[
                {
                  message: "Please input your Weight!",
                },
              ]}
            >
              <Input suffix="lbs" />
            </Form.Item>

          </Col>
        </Row>
        <Row style={{ justifyContent: 'center' }} span={24}>
            <Form.Item >
              <Button
              
                className="mb-4"
                onSubmit={handleSubmit}
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Form.Item>
            </Row>
      </Form>
    </div>
  );
};

export default Biovitals;
