import React from "react";
import Comment from "./comment";

class ListComment extends React.Component {
    render() {
        return (
            <>
                <div className="cont-comment" id="comment">
                    <h1><center>Comment</center></h1>
                    <div>
                        {this.props.DataComment?.map((data) => (
                            <Comment image={data.image} date={data.date} comment={data.comment} name={data.name} key={data.id} />
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default ListComment;