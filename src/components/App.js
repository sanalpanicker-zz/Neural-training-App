import React, {Component, Fragment} from 'react';
import LabelLister from './label_lister';
import LabelSelector from './label_selector';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
        this.basedata;
    }

    updateData = (result) => {
        const data = result.data;
        this.basedata = data;
        this.setState({data,loaded: true});
    }

    speedSelector = (speed) => {
        let newData = this.basedata;
        if (speed) {
            newData = this
                .basedata
                .filter((d) => {
                    return d.Label === `Speed Limit ${speed}`;
                })
        }
        this.setState({data: newData});

    }

    componentWillMount = () => {
        var csvFilePath = require("../data/labels.csv");
        var Papa = require("papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
            header: true,
            download: true,
            skipEmptyLines: true,
            complete: this.updateData
        });
    }

    render() {
        return (
            <Fragment>
                <LabelSelector speedFilter={this.speedSelector}/> {this.state.loaded
                    ? <LabelLister data={this.state.data}/>
                    : <div>Loading....</div>}
            </Fragment>
        );
    }
}

export default App;
