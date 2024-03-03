import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // console.log(props.name, " Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    //console.log(this.props.name, " Did Mount");
    const data = await fetch("https://api.github.com/users/Tanmay4669");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }

  componentDidUpdate() {
    //console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    //console.log(name, " Render");
    return (
      <>
        <div className="p-4 border-solid box-border border-2 ">
          <img src={avatar_url} />
          <h1 className="font-semibold ">Name: {name}</h1>
          <h1 className="font-semibold">Location: {location}</h1>
        </div>
      </>
    );
  }
}

export default UserClass;
