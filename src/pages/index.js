import React from "react";
import Comment from "./H12 - Comment/index";
class CommentPages extends React.Component {
    render() {
        return (
        <>
        <div className="cont-comment" id="comment">
            <h1><center>Comment</center></h1>
            <div>
                {this.props.DataComment?.map((data) => (
                    <Comment image={data.image} date={data.date} content={data.content} name={data.name}  key={data.id}/>
                ))}
            </div>
        </div>
        </>
        );
    }
}

export default CommentPages;