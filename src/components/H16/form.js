import React from "react";

// Membuat class Clock
class FormForum extends React.Component {
    constructor(props){
        super(props);
        // Membuat state dengan object name dan comment kosong
        this.state = { 
            name: "",
            comment: ""
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleChangeComment = this.handleChangeComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    // membuat function output bila input sudah di isi
    handleSubmit(event) {
        alert(`Terima kasih ${this.state.name}, telah Berkoment : ${this.state.comment}`);
        event.preventDefault();
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="ui reply form container">
                <label className="field">
                Name:
                <input
                    name='name'
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                </label>
                <label className="field">
                    Comment:
                    <textarea 
                        name='comment'
                        value={this.state.value}
                        onChange={this.handleChange} />
                </label>
                <input  className="ui facebook button" style={{margin:"20px 0px"}} type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormForum;