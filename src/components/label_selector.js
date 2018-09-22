import React, {Component} from 'react';

class LabelSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: ''
        };
    }

    filterSpeed = (speedLimit) => {
        this
            .props
            .speedFilter(speedLimit);
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <button
                    onClick={() => this.filterSpeed()}
                    className="btn btn-outline-success"
                    type="button">ALL</button>
                <button
                    onClick={() => this.filterSpeed(20)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 20</button>
                <button
                    onClick={() => this.filterSpeed(30)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 30</button>
                <button
                    onClick={() => this.filterSpeed(40)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 40</button>
                <button
                    onClick={() => this.filterSpeed(50)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 50</button>
                <button
                    onClick={() => this.filterSpeed(60)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 60</button>
                <button
                    onClick={() => this.filterSpeed(80)}
                    className="btn btn-outline-success"
                    type="button">Speed Limit 80</button>
            </nav>
        )
    }
}

export default LabelSelector;