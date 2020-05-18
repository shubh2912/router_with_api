import React from 'react';
import axios from 'axios';


class Restuarant extends React.Component {
    constructor() {
        super();
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        // API Call
        axios("https://demo8141926.mockable.io/getRestaurantList")
            .then(res => this.setState({ response: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        const { response } = this.state;
        return (
            <div>
                <h1>Restuarant List</h1>
                {response.map((item) => {
                    return <div>
                        <ul type="square" >
                            <li>{item.name}</li>
                        </ul>
                    </div>
                })}
            </div>
        )
    }

}

export default Restuarant;