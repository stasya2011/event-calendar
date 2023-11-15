import { FC, useEffect, useLayoutEffect, useState } from "react";
import EventForm from "../../components/EventForm";
import CalendarComponent from "../../components/Calendar";
import { Button, Layout, Row, Modal } from "antd";
import { useActions, useTypeSelector } from "../../hooks";
import Confetti from "react-confetti";

const Events: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfettiLaunched, setIsConfettiLaunched] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: 300,
    height: 300,
  });
  const { fetchGuests, createEvent, fetchEvents } = useActions();
  const { users, events } = useTypeSelector((state) => state.event);
  const { user } = useTypeSelector((state) => state.authReduser);

  useLayoutEffect(() => {
    resizeWindow();
  }, []);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
    isConfettiLaunched && setTimeout(() => setIsConfettiLaunched(false), 8000);
  }, []);

  const onOk = () => {
    setIsModalOpen(false);
  };

  const resizeWindow = () =>
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  return (
    <Layout>
      {isConfettiLaunched && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={1000}
        />
      )}
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
