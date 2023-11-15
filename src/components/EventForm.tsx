import { useState } from "react";
import { Form, Input, DatePicker, Button, Row, Select } from "antd";
import { rules } from "../utils";
import { IEvent, IUser } from "../types";
import formatDate from "../api/formatDate";
import { Dayjs } from "dayjs";

const EventForm = ({
  users,
  submitForm,
}: {
  users: any;
  submitForm: (event: IEvent) => void;
}) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    date: "",
    description: "",
    guest: "",
  });

  const selectDate = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = formatDate(date);
      setEvent({ ...event, date: formattedDate });
    }
  };

  return (
    <Form
      name="control-hooks"
      onFinish={() => submitForm({ ...event, author: "" })}
    >
      <Form.Item
        name="Description"
        label="Description:"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Date:" name="date" rules={[rules.required()]}>
        <DatePicker onChange={(date: any) => selectDate(date)} />
      </Form.Item>
      <Form.Item label="Participants:" name="Participants">
        <Select
          onChange={(guest: string) => setEvent({ ...event, guest: guest })}
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
