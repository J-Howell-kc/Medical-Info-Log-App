import { Button, Form, Input, DatePicker } from "antd";
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

const handleSubmit = (e) => {
  
  e.preventDefault();
  console.log("submit");
};

const Biovitals = () => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <Form
            name="basic"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 12,
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
                  message: "Please input your First Name!",
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
          </Form>
        </Col>
        <Col>
          <Form
            name="basic"
            labelCol={{
              span: 12,
            }}
            wrapperCol={{
              span: 12,
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
            <Form.Item label="Date of Birth" name="dateofbirth">
              <DatePicker onChange={onChange} />
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
              <Input suffix='in.'/>
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
              <Input suffix='lbs' />
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row className=' display-block'>
        <Button className='mb-4' onSubmit={handleSubmit} type="primary" htmlType="submit">
          Save
        </Button>
      </Row>
    </div>
  );
};

export default Biovitals;
