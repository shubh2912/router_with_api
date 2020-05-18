import React from 'react';
import '../App.css';
import Header from './Header';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      name: 'Developer'
    }
    console.log(">>>>> Inside Constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(">>>>> Inside getDerivedStateFromProps");
    if (prevState.value === 0) {
      return {
        name: 'React Developer',
        value: 0
      }
    }
    return null;
  }

  shouldComponentUpdate(prevState) {
    console.log(">>>>> Inside shouldComponentUpdate");
    if (prevState.value === this.state.value) {
      return false;
    }
    return true;
  }

  componentDidMount() {
    // API Calls - AJAX Call
    console.log(">>>>> Inside componentDidMount");
  }

  Increment = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });

  }

  Decrement = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  }

  navigate = () => {
    const { value } = this.state;
    this.props.history.push(`/form/${value}`);
  }

  render() {
    console.log(">>>>> Inside Render");
    const { value, name } = this.state;
    return (
      <div>
        <Header nameProp={name} valueProp={value} />
        <br />
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button><br />
        <button onClick={this.navigate}>Navigate</button>
      </div>
    )
  }
}

export default App;
