import React from "react";
import './like.css'

// Membuat Class Like
class Like extends React.Component {
    constructor() {
        super();
        this.state = {
            like: 0
        };
    }

    // Membuat function likeClick
    likeClick = ()  => {
        this.setState({
            // Bila like di click menambah satu
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