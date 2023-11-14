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
      console.log(guests);
      dispath(EventActionCreators.setGuests(guests.data));
    } catch (error) {
      console.error(error);
    }
  },
};
