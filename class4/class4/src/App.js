import React, { Component, Fragment } from "react";
import Users from "./components/Users";

const url = "https://dummyjson.com";

/* Group of Properties
  1) State -> Collections of Variable/Object
  2) Behavior -> Collections of methods/function */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch(`${url}/users`)
    .then((res) => res.json())
    .then((out) => {
      console.log("USERS :", out);
      console.log("USERS :", out.users);

      this.setState({
        users: out.users,
      });
    })
    .catch((err) => console.log(err.message));
  }

  render() {
    return (
      <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-3 text-success text-center">
              Props in Class Component..!
            </h1>
          </div>
        </div>
      </div>

      <Users users={this.state.users}/>
     </Fragment>
    );     
  }
}

export default App;



