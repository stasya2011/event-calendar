import { FC, useEffect, useState } from "react";
import EventForm from "../../components/EventForm";
import CalendarComponent from "../../components/Calendar";
import { Button, Layout, Row, Modal } from "antd";
import { useActions, useTypeSelector } from "../../hooks";

const Events: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { fetchGuests } = useActions();
  const { users } = useTypeSelector((state) => state.event);

  useEffect(() => {
    fetchGuests();
    console.log("++++ ", users);
  }, []);

  const onOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <CalendarComponent events={[]} />
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
          <EventForm users={users} />
        </Modal>
      </Row>
    </Layout>
  );
};

export default Events;
