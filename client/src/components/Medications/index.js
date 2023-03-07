import { useState } from "react";
import { Row, Space, Form, Input, Button, Table } from "antd";
import { useMutation } from "@apollo/client";
import { ADD_MEDICATION } from "../../utils/mutations";

// const { RangePicker } = DatePicker;
// const { TextArea } = Input;

const Medications = () => {
  const [medications, setMedications] = useState("");

  const [addMedication] = useMutation(ADD_MEDICATION);

  const columns = [
    {
      key: "1",
      title: "Medication Name",
      dataIndex: "medicationname",
    },
    {
      key: "2",
      title: "Dosage",
      dataIndex: "dosage",
    },
    {
      key: "3",
      title: "Action",
      render: (record) => (
        <Space size="middle">
          <a onClick={onDeleteRecord} style={{ color: "red" }}>
            Delete
          </a>
        </Space>
      ),
    },
  ];

  const onFinish = (data) => {
    setMedications((pre) => {
      return [
        ...pre,
        { medicationname: data.medicationname, dosage: data.dosage },
      ];
    });
    console.log(data);
    addMedication({
      variables: {
        medicationname: data.medicationname,
        dosage: data.dosage,
      },
    });
  };

  const onDeleteRecord = (record) => {
    setMedications((pre) => {
      return pre.filter(
        (item) => item.medicationname !== record.medicationname
      );
    });
    console.log(record);
  };

  return (
    <>
      <Form onFinish={onFinish}>
        <Row className="mt-5 ml-3">
          <Space>
            <Form.Item
              label="Medication Name"
              name="medicationname"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Dosage"
              name="dosage"
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Space>
        </Row>
      </Form>

      <Table columns={columns} dataSource={medications}></Table>
    </>
  );
};

export default Medications;

// <Form
//   labelCol={{ span: 4 }}
//   wrapperCol={{ span: 14 }}
//   layout="horizontal"
//   disabled={componentDisabled}
//   style={{ maxWidth: 600 }}
// >
//   <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
//     <Checkbox>Checkbox</Checkbox>
//   </Form.Item>
//   <Form.Item label="Radio">
//     <Radio.Group>
//       <Radio value="apple"> Apple </Radio>
//       <Radio value="pear"> Pear </Radio>
//     </Radio.Group>
//   </Form.Item>
//   <Form.Item label="Input">
//     <Input />
//   </Form.Item>
//   <Form.Item label="Select">
//     <Select>
//       <Select.Option value="demo">Demo</Select.Option>
//     </Select>
//   </Form.Item>
//   <Form.Item label="TreeSelect">
//     <TreeSelect
//       treeData={[
//         {
//           title: "Light",
//           value: "light",
//           children: [{ title: "Bamboo", value: "bamboo" }],
//         },
//       ]}
//     />
//   </Form.Item>
//   <Form.Item label="Cascader">
//     <Cascader
//       options={[
//         {
//           value: "zhejiang",
//           label: "Zhejiang",
//           children: [
//             {
//               value: "hangzhou",
//               label: "Hangzhou",
//             },
//           ],
//         },
//       ]}
//     />
//   </Form.Item>
//   <Form.Item label="DatePicker">
//     <DatePicker />
//   </Form.Item>
//   <Form.Item label="RangePicker">
//     <RangePicker />
//   </Form.Item>
//   <Form.Item label="InputNumber">
//     <InputNumber />
//   </Form.Item>
//   <Form.Item label="TextArea">
//     <TextArea rows={4} />
//   </Form.Item>
//   <Form.Item label="Switch" valuePropName="checked">
//     <Switch />
//   </Form.Item>
//   <Form.Item label="Upload" valuePropName="fileList">
//     <Upload action="/upload.do" listType="picture-card">
//       <div>
//         <PlusOutlined />
//         <div style={{ marginTop: 8 }}>Upload</div>
//       </div>
//     </Upload>
//   </Form.Item>
//   <Form.Item label="Button">
//     <Button>Button</Button>
//   </Form.Item>
// </Form>
