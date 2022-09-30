import React from 'react'
import SearchBar from './search/search';
import axios from './api_yt';
import VideoDetail from './video-card/videoCard';
import VideoList from './video-list/videoList';
import Comment from '../H13/comment';
import DataComment from '../../data/comment'

class YoutubeList extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await axios.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
        console.log(response)
    };

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