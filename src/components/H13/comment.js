import React from "react";
import Like from '../H14/like';
import '../../assets/css/comment.css';

// Membuuat class comment
class Comment extends React.Component {
    constructor({image, name, date, comment}) {
        super();
        this.state = {
            image, 
            name, 
            date,
            comment,
            like: 0
        };
    }
    render(){
        return (
            <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={this.state.image} />
                    </a>
                    <div className="content">
                        <a href="/" className="author">
                            {this.state.name}
                        </a>
                        <div className="metadata">
                            <span className="date">{this.state.date}</span>
                        </div>
                        <div className="text">{this.state.comment}</div>
                        <Like />
                    </div>
                </div>
            </div>
        )
    }
}

// Export class comment
export default Comment;