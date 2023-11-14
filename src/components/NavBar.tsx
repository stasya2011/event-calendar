import { Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypeSelector, useActions } from "../hooks";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypeSelector((state) => state.authReduser);
  const { logout: logoutFn } = useActions();

  const logout = async () => {
    logoutFn();
    navigate("/login");
  };

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "whitesmoke" }}>
              {user.username.toLocaleUpperCase()}
            </div>
            <div
              style={{ color: "whitesmoke" }}
              onClick={() => navigate(RouteNames.EVENT)}
            >
              Events
            </div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
                Log out
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={2}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default NavBar;
