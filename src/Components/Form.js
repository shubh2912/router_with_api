import React from 'react';
import '../App.css';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            FN: '',
            LN: '',
            Gender: '',
            Skills: '',
            value: 0
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.match.params.Id });
    }


    handleFN = (event) => {
        this.setState({ FN: event.target.value })
    }

    handleLN = (event) => {
        this.setState({ LN: event.target.value })
    }

    handleGender = (event) => {
        this.setState({ Gender: event.target.value })
    }

    handleSkills = (event) => {
        this.setState({ Skills: event.target.value })
    }

    handleSubmit = (event) => {
        const { FN, LN, Gender, Skills } = this.state;
        const Obj = {
            FirstName: FN,
            LastName: LN,
            Gender: Gender,
            Skills: Skills
        }
        alert(JSON.stringify(Obj));
        event.preventDefault();
    }

    handleReset = () => {
        this.setState({ FN: '', LN: '', Gender: '', Skills: '' });
    }

    back = () => {
        this.props.history.push("/");
    }

    forward = () => {
        this.props.history.push("/restuarant");
    }

    render() {
        const { FN, LN, value } = this.state;
        return (
            <div className="App" >
                <form onSubmit={this.handleSubmit}>
                    <label>First Name : </label>
                    <input type="text" name="FN" value={FN} onChange={this.handleFN} /><br />
                    <label>Last Name : </label>
                    <input type="text" name="LN" value={LN} onChange={this.handleLN} /><br />
                    <label>Gender : </label>
                    <span>Male</span> <input type="radio" name="gender" value="Male" onChange={this.handleGender} />
                    <span>Female</span> <input type="radio" name="gender" value="Female" onChange={this.handleGender} /><br />
                    <label>Skills : </label>
                    <select onChange={this.handleSkills}>
                        <option value="Select">Select</option>
                        <option value="FullStack">FullStack</option>
                        <option value="FrontEnd">FrontEnd</option>
                        <option value="Backend">Backend</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                    <input type="reset" onClick={this.handleReset} value="Reset" />
                </form><br />
                <div> Value : {value}</div>
                <button onClick={this.back}>Back</button>
                <button onClick={this.forward}>Forward</button>
            </div>
        );
    }
}

export default Form;