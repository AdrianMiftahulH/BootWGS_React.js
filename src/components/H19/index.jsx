import React from 'react'
import SearchBar from './search/search';
import axios from './api_yt';
import VideoDetail from './video-card/videoCard';
import VideoList from './video-list/videoList';
import Comment from '../H13/comment';
import DataComment from '../../data/comment'

class YoutubeList extends React.Component {
    // membuat state video, video dipilih dengan kosong dan nul
    state = {
        videos: [],
        selectedVideo: null
    }
    // f form di klik
    handleSubmit = async (termFromSearchBar) => {
        // mengambil data api
        const response = await axios.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        // menampilkan data 
        this.setState({
            videos: response.data.items
        })
        console.log(response)
    };

    // f untuk menangani bila video di pilih
    handleVideosSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: "1em" }}>
                <center><h1 id='searchvideo'>Video Search</h1></center>
                <SearchBar onSubmit={this.handleSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                            <Comment DataComment={DataComment} />
                        </div>
                        <div className='five wide column '>
                            <VideoList handleVideoSelect={this.handleVideosSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default YoutubeList