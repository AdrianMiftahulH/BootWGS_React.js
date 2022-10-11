import React from "react";
import { connect } from "react-redux";

class AppIncrement extends React.Component {
    // function increment
    increment = () => {
        this.props.dispatch({
            type: "INCREMENT"
        });
    };

    // function decrement
    decrement = () => {
        this.props.dispatch({
            type: "DECREMENT"
        });
    };

    // function reset
    reset = () => {
        this.props.dispatch({
            type: "RESET"
        });
    };
    render() {
        return (
            <div className="App mt-5">
                <button onClick={this.increment} className="btn btn-success">
                    Increment
                </button>
                <button onClick={this.decrement} className="btn btn-danger mx-5">
                    Decrement
                </button>
                <button onClick={this.reset} className="btn btn-info">
                    Reset
                </button>
                <h2 className="mt-5 display-1">{this.props.count}</h2>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.count
    };
};

export default connect(mapStateToProps)(AppIncrement);
