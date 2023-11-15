import React from "react";
import { Card, Layout, Row } from "antd";
import FormComponent from "../../components/Form";
import Spinner from "../../components/Spinner";
import "../../styles.scss";
import { useTypeSelector } from "../../hooks";
import ErrorPage from "../Error/Error";

const Login: React.FC = () => {
  const { isLoading, isError } = useTypeSelector((state) => state.authReduser);
  const isLoadingComponent = isLoading && !isError ? <Spinner /> : null;
  const isErrorComponent =
    !isLoading && isError ? <ErrorPage message={isError} /> : null;
  const content = !isError && !isLoading && <FormComponent />;
  return (
    <Layout>
      <Row justify={"center"} align={"middle"} className="h100">
        {isLoadingComponent}
        {isErrorComponent}
        <Card>{content}</Card>
      </Row>
    </Layout>
  );
};

export default Login;
