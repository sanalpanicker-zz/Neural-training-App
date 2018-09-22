import React, {Component, Fragment} from 'react';
import {List, AutoSizer} from "react-virtualized";

import ImgLoader from './image_loader';

class LabelLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resized: false,
            rowHeight: 400
        };
        this.rowHeight = 400;
    }

    resizeRowHeight = (rowHeight) => {
        this.setState({rowHeight});
    }
    // renderImage = (data) => {     return <ImgLoader key={data.Img_Name +
    // data.Top} imgdata={data}/>; }

    renderImage = ({index, key, style, parent}) => {
        const items = [];
        const fromIndex = index * 2;
        const toIndex = Math.min(fromIndex + 2, this.props.data.length);

        for (let i = fromIndex; i < toIndex; i++) {
            console.log(this.props.data[i]);
            items.push(<ImgLoader
                key={this.props.data[i].Img_Name + this.props.data[i].Left}
                rowheight={this.resizeRowHeight}
                imgdata={this.props.data[i]}/>);
        }
        return (
            <div id="image-containerX" className='Row' key={key} style={style}>
                {items}
            </div>
        );
    }

    render() {
        const dataSet = this.props.data;
        return <Fragment>
            {/* <section>
            <div id="flex"> */}
            {/* {dataSet.map(this.renderImage)} */}
            <AutoSizer>
                {({width, height}) => {
                    return <List
                        className='List'
                        width={width}
                        height={height}
                        rowHeight={this.state.rowHeight}
                        rowRenderer={this.renderImage}
                        rowCount={this.props.data.length / 2}
                        overscanRowCount={4}/>
                }}
            </AutoSizer>
            {/* </div>
            </section> */}
        </Fragment>;
    }
}

export default LabelLister;