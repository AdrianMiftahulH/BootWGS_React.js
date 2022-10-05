import React from 'react'
import SearchBar from '../H19/search/search';
import axios from '../H19/api_yt';
import VideoDetail from '../H19/video-card/videoCard';
import VideoList from '../H19/video-list/videoList';
import { useState, useEffect } from 'react';

export const HookYt = (defaultSearchTerm) => {
    // membuat usestate 
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    // untuk menampilkan data random saat web baru di buka
    useEffect(() => {
        handleSubmit(defaultSearchTerm);
    }, [defaultSearchTerm]);

    // variabel untuk menangani input submit
    const handleSubmit = async termFromSearchBar => {
        // mengambil date api 
        const response = await axios.get('/search', {
            params: {
                q: termFromSearchBar
            },
        });
        // menampilkan data 
        setVideos(response.data.items);
    };

    return (
        <div className='ui container' style={{ marginTop: "1em" }}>
            <center><h1 id='searchvideo'>Video Search</h1></center>
            <SearchBar onSubmit={handleSubmit} />

            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail
                            video={selectedVideo}
                        />
                    </div>
                    <div className='five wide column '>
                        <VideoList
                            handleVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HookYt