import NavBar from "./components/NavBar";
import AppRouter from "./components/AppRouter";
import { Layout } from "antd";

function App() {
  return (
    <Layout style={{ width: 1000, margin: "0 auto" }}>
      <NavBar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
