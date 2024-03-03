import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // const data = useContext(UserContext);
  // console.log(data);

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between border-b-2 shadow-lg ">
      <div className="items-center flex">
        <img
          src={logo}
          className=" w-36 h-24 items-center cursor-pointer ml-8"
        />
      </div>

      <div>
        <ul className="flex p-4 m-4 justify-between">
          <li className="m-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-4 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/about">About us</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-4 cursor-pointer">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="m-4 cursor-pointer"> Cart</li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-lg"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="m-4 font-semibold cursor-pointer">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
