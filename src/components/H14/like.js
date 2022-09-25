import React from "react";
import '../../assets/css/like.css'

// Membuat Class Like
class Like extends React.Component {
    constructor() {
        super();
        this.state = {
            like: 0
        };
    }

    likeClick = ()  => {
        this.setState({
            like: this.state.like + 1
        })
    }

    
    render(){
        return (
            <div className="text">
                <button onClick={this.likeClick}><i className="thumbs up icon"></i></button>
                <span className="text">{this.state.like}</span>
            </div>
        )
    }
}

export default Like;