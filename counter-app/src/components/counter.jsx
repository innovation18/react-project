import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    message: "Hello! Welcome onboard! We are lucky to have you ",
    // classes: ["Python", "Angluar", "Node JS", "React"],
    preRequisite: ["HTML", "CSS", "Java Script Basics", "Readiness"],
    // ["HTML", "CSS", "Java Script Basics", "Readiness"]
  };

  render() {
    const listStyle = {
      "list-style-type": "none",
    };

    // const a = document.getElementById('HTML');

    return (
      <React.Fragment>
        <div class="jumbotron text-center mt-1">
          <h1 class="display-4">Hello, Little Ones!</h1>
          <p class="lead">Welcome to CoderShunya! We Learn. We Code.</p>
          <p class="font-italic">
            This is going to be our first very web application on React!
          </p>
        </div>

        <ul style={listStyle}>
          {this.state.preRequisite.map((tag) => (
            <li key={tag}>
              <input type="checkbox" id={tag} /> {tag}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  //Placeholder - User Information from Session.

  getUser(name) {
    return name;
  }
}

export default Counter;
