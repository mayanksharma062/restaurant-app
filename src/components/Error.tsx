import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const err: any = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!!!!!!!!!!!</h1>
      <h2>Something Went Wrong!</h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
