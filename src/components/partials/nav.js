import { Link } from "react-router-dom";

function Navigasi() {
    return (
        <div className="ui text menu container">
            <h1 className="header item">React App</h1>
            <div className="center aligned container">
                <Link to='/' className="item">Home</Link>
                <Link to='/Forum' className="item">Forum</Link>
                <Link to='/ImageSearch' className="item">Image Search</Link>
                <Link to='/Youtube' className="item">Youtube</Link>
                <Link to='/Redux' className="item">Redux</Link>
            </div>
        </div>
    );
}

export default Navigasi;