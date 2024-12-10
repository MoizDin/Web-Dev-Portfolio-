import './App.css';
import React from 'react';
import sad from './sad.png';
import happy from './happy.png';

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pic: happy };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
  }
  Toggle_Mode() {
    this.setState((prevState) => {
      if (prevState.pic === sad) {
        this.mode = "happy";
        return { pic: happy };
      } else if (prevState.pic === happy) {
        this.mode = "sad";
        return { pic: sad };
      }
    });
  }
  render() {
    return (
      <div>
        <h3>This is output of Task2: {this.mode}</h3>
        <button onClick={this.Toggle_Mode}>
          <img src={this.state.pic} alt=" " />
        </button>
      </div>
    );
  }
}
export default ToggleMode;
