import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker } from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const Nutrition = () => {
  //    const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{ maxWidth: 600, marginTop: "50px" }}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox </Checkbox>
        </Form.Item> */}
        {/* <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        {/* <Form.Item label="Input">
          <Input />
        </Form.Item> */}
        {/* <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item> */}
        {/* <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item> */}

        {/* <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item> */}
        <Form.Item label="Meal 1">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Meal 2">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Meal 3">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Other">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Time">
          <Input />
        </Form.Item>
        <Form.Item label="Drinks">
          <TextArea rows={4} />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item> */}
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
