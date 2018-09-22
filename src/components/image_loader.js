import React, {Component} from 'react';
import _ from 'lodash';

class ImgLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgLoaded: false
        };
        this.imageDetail = {};
    }

    handleResize = () => {
        this.setImageDeatils();
    }

    componentDidMount() {
        window.addEventListener('resize', _.debounce(this.handleResize, 120));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    setImageDeatils = (e) => {
        let target = this.img;
        if (e) {
            target = e.target;
        }
        if (target) {
            if (target.naturalWidth) {
                this.imageDetail.nw = target.naturalWidth;
            }
            if (target.naturalHeight) {
                this.imageDetail.nh = target.naturalHeight;
            }
            this.imageDetail.w = target.width;
            this.imageDetail.h = target.height;
            this.imageDetail.rf = target.naturalWidth / target.width;
            this.setState({imgLoaded: true});
            this
                .props
                .rowheight(this.imageDetail.h);
        }
    }
    render() {
        console.log(this.props.imgdata);
        this.imageDetail.focusStyle = {
            height: parseInt(this.props.imgdata.Height) / this.imageDetail.rf,
            width: parseInt(this.props.imgdata.Width) / this.imageDetail.rf,
            top: parseInt(this.props.imgdata.Top) / this.imageDetail.rf,
            left: parseInt(this.props.imgdata.Left) / this.imageDetail.rf
        }
        return (
            <figure className="Item">
                <img
                    onLoad={this.setImageDeatils}
                    ref={(dom) => {
                    this.img = dom;
                }}
                    src={require(`../../public/images/${this.props.imgdata.Img_Name}`)}></img>
                {this.state.imgLoaded
                    ? <figcaption id="identifier" style={this.imageDetail.focusStyle}></figcaption>
                    : ""}
            </figure>
        );
    }
}

export default ImgLoader;
