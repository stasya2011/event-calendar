import { Form, Input, DatePicker, Button, Row, Select } from "antd";
import { rules } from "../utils";
import { IUser } from "../types";

interface IEventFormProps {
  users: IUser[];
}
const EventForm = ({ users }: { users: any }) => {
  return (
    <Form name="control-hooks">
      <Form.Item name="Event" label="Name:" rules={[rules.required()]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Description"
        label="Description:"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Date:" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Participants:" name="Participants">
        <Select
          style={{ backgroundColor: "red" }}
          // showSearch
          // placeholder="Select a person"
          // optionFilterProp="children"
        >
          {users.users.map((guest: IUser) => {
            return (
              <Select.Option key={guest.username} value={guest.username}>
                {guest.username}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
