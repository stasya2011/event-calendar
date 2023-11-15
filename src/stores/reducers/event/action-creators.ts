import { AppDispatch } from "../..";
import { IEvent, IUser } from "../../../types";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";
import { getUsers } from "../../../api/UserService";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),

  // get user from the file
  fetchGuests: () => async (dispath: AppDispatch) => {
    try {
      const guests = await getUsers();

      dispath(EventActionCreators.setGuests(guests.data));
    } catch (error) {
      console.error(error);
    }
  },

  fetchEvents: (authorName: string) => async (dispath: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvent = json.filter(
        (ev) => ev.author === authorName || ev.guest === authorName
      );

      dispath(EventActionCreators.setEvents(currentUserEvent));
    } catch (error) {
      console.log(error);
    }
  },

  createEvent: (event: IEvent) => async (dispath: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispath(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (err) {
      console.error(err);
    }
  },
};
