import { Component } from "react";

class ImageComponent extends Component {

render() {
    return <img  src={this.props.source} alt={this.props.alt} style={this.props.imageStyle}/>
}



}

export default ImageComponent