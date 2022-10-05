import React from 'react'
import ImageList from './atoms/list_image';
import SearchBar from './atoms/search';
import axios from './axios';

class OutputImage extends React.Component {
    // Membuat image kosong
    state = { images: [] };

    // membuat f bila untuk mencari item di search
    onSearchSubmit = async (term) => {
        console.log(term)
        // Membuat res dengan mengambil data api dari axios
        const response = await axios.get("/search/photos", {
            params: { query: term },
        });
        // Menampilkan data api
        this.setState({ images: response.data.results });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }} id="searchimage">
                <center><h1>Image Search</h1></center>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}

export default OutputImage