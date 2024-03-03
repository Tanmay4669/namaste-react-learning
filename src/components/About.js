import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Did Mount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <>
        <h1 className="p-4 font-bold text-3xl">About Us</h1>

        <div>
          Logged In User:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Child1"} location={"Maharashtra"} />
      </>
    );
  }
}

export default About;

// const About = () => {
//   return (
//     <>
//       <h1 className="p-4 font-bold text-3xl">About Us</h1>
//       {/* <User
//         name={"Tanmay Vaidya (Function)"}
//         location={"Maharashtra (Function)"}
//       /> */}
//       <UserClass
//         name={"Tanmay Vaidya (Class)"}
//         location={"Maharashtra (Class)"}
//       />
//     </>
//   );
// };
