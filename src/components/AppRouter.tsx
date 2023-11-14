import { Route, Routes } from "react-router-dom";
import { publicRout, privatRout } from "../router";
import { useTypeSelector } from "../hooks";

const AppRouter = () => {
  const { isAuth } = useTypeSelector((state) => state.authReduser);

  return !isAuth ? (
    <Routes>
      {privatRout.map((route) => (
        <Route key="route" path={route.path} element={<route.element />} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRout.map((route) => (
        <Route key="route" path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default AppRouter;
