import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const { name, location } = props;

  return (
    <>
      <div className="p-4 border-solid box-border border-2 ">
        <h1 className="font-semibold">Count: {count}</h1>
        <h1 className="font-semibold">Count2: {count2}</h1>
        <h1 className="font-semibold">Name: {name}</h1>
        <h1 className="font-semibold">Location: {location}</h1>
      </div>
    </>
  );
};

export default User;
