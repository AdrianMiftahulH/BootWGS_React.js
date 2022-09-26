import React from "react";

// Membuat class Clock
class Clock extends React.Component {
    // membuat method kostruktor dengan props
    constructor(props) {
        super(props);
        // membuat state awal dengan properti date
        this.state = {date: new Date()};
    }

    // Membuat method lifecycle
    // Membuat Method bekerja saat render clock bekerja
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // Untuk menghapus waktu dari method lifecycle
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // Membuat method tick untuk menjalankan class Clock setiap detik
    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render(){
        return(
            <div>
                <p>Clock</p>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;