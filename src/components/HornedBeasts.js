import React from 'react';

class HornedBeast extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.h2Title}</h2>
                <img src={this.props.imgSrc}>{this.props.imgDescription}</img>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default HornedBeast;