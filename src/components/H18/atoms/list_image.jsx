import React from 'react'
import './list-image.css'

const ImageList = (props) => {

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });

    return (
        <div className="cont-grid">
            {images}
        </div>
    )
}

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { span: 0 };
        this.imgRef = React.createRef();
    }
    componentDidMount() {
        this.imgRef.current.addEventListener('load', this.setSpans);
    }
    setSpans = () => {
        const height = this.imgRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }
    render() {
        const { description, urls } = this.props.image;
        return (
            <img src={urls.regular} alt={description} ref={this.imgRef} style={{ gridRowEnd: `span ${this.state.spans}` }} />
        )
    }
}

export default ImageList
