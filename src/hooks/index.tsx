import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../stores";
import { allActionCreators } from "../stores/reducers/auth/actionCreators";
import { bindActionCreators } from "redux";

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, dispatch);
};
