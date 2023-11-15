import { FC, useEffect, useState } from "react";
import EventForm from "../../components/EventForm";
import CalendarComponent from "../../components/Calendar";
import { Button, Layout, Row, Modal } from "antd";
import { useActions, useTypeSelector } from "../../hooks";

const Events: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { users, events } = useTypeSelector((state) => state.event);
  const { user } = useTypeSelector((state) => state.authReduser);
  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  const onOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <CalendarComponent events={events} />
      <Row justify={"center"}>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          Add Event
        </Button>
        <Modal
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={onOk}
          title={"Add event: "}
          footer={null}
        >
          <EventForm
            users={users}
            submitForm={(event) => {
              createEvent(event);
              onOk();
            }}
          />
        </Modal>
      </Row>
    </Layout>
  );
};

export default Events;
