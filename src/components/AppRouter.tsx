import { Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router";
import { useTypeSelector } from "../hooks";
import { useEffect } from "react";

const AppRouter = () => {
  const { isAuth } = useTypeSelector((state) => state.authReduser);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, i) => (
        <Route
          key={`${route}-${i}`}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, i) => (
        <Route
          key={`${route}-${i}`}
          path={route.path}
          element={<route.element />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
