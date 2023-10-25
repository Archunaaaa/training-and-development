import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      changeNames: props.head.name,
    };
  }
  buttonClick = () => {
    this.props.head.name = "Your voice is audible";
    this.setState({ changeNames: "Body" });
  };
  render() {
    return (
      <div>
        <h4 className="text-center mt-4">
          Hello World, It's Class Component! {this.props.head.name}
        </h4>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => this.buttonClick()}
            className="btn btn-primary mt-4"
          >
            Click Me!
          </button>
        </div>
      </div>
    );
  }
}
export default ClassComponent;
