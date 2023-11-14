import errorImg from "./browser-error-svgrepo-com.svg";

const ErrorPage = (props: { message: string }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={errorImg} alt="Error" width={600} height={200} />
      <h2>{props.message}</h2>
    </div>
  );
};

export default ErrorPage;
