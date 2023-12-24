import { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="flex justify-between border-b-2 border-black ">
      <div className="items-center flex">
        <img
          src={logo}
          className=" w-36 h-24 items-center cursor-pointer ml-8"
        />
      </div>

      <div>
        <ul className="flex p-4 m-4 justify-between">
          <li className="m-4 cursor-pointer">Home</li>
          <li className="m-4 cursor-pointer">About us</li>
          <li className="m-4 cursor-pointer">Contact Us</li>
          <li className="m-4 cursor-pointer">Cart</li>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
