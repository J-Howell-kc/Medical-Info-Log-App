import { Button, Checkbox, Form, Input, DatePicker, Space } from "antd";
import Col from "antd/lib/grid/col";
import Row from "antd/lib/grid/row";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

const Biovitals = () => {
  return (
    <div>
      <Row>
        <Col>
          <Form
            name="basic"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 10,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                {
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                {
                  message: "Please input your password!",
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
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input className='mb-3' />
              <Input />
              </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <Form
            name="basic"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 10,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
            label="Date of Birth"
            name="dateofbirth">
            <DatePicker 
            onChange={onChange} />
            </Form.Item>

            <Form.Item
              label="Height"
              name="Height"
              rules={[
                {
                  
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input />
              <span>Inches</span>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Biovitals;
