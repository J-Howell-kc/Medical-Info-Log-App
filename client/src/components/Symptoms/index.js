import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
//   Radio,
  Select,
//   Cascader,
  DatePicker,
//   InputNumber,
//   TreeSelect,
//   Switch,
//   Checkbox,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

 const Symptoms = () => {
//   const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      {/* <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox> */}
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{ maxWidth: 600, marginTop: "50px"}}
      >
        {/* <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item> */}
        <Form.Item label="Symptom">
          <Input />
        </Form.Item>
       {/* <Form.Item label="Select">
          <Select> 
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item> */}
        {/* <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
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
        <Form.Item label="Date">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Date Start/Stop">
          <RangePicker />
        </Form.Item>
        {/* <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item> */}
        <Form.Item label="Description">
          <TextArea rows={12} />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item label="Photo" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Submit">
          <Button type="primary" htmlType="submit" color="red">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
        };

export default Symptoms;