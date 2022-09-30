function Navigasi() {
    return (
        <div className="ui text menu container">
            <h1 className="header item">React App</h1>
            <div className="center aligned container">
                <a className="active item" href="/">
                    Home
                </a>
                <a className="item" href="#comment">
                    Comment
                </a>
                <a className="item" href="#searchimage">
                    Image Search
                </a>
                <a className="item" href="#searchvideo">
                    Video Search
                </a>
            </div>
        </div>
    );
}

export default Navigasi;