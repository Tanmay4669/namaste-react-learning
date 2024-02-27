import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <>
      <div className="m-6">
        <h1 className="text-2xl font-bold">Opps!!!</h1>
        <h1 className="text-2xl font-bold">Something went Wrong !!</h1>
        <h1 className="text-2xl font-bold">
          {err.status}: {err.statusText}
        </h1>
      </div>
    </>
  );
};

export default Error;
