import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { FormReduxPage, ForumPage, ImageSearchPage, IncrementPage, Landing, ListUserPage, PlaceholderPage, ReduxPage, YoutubePage } from '../../pages';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />}></Route>
                <Route path="/Forum" element={<ForumPage />} />
                <Route path="/ImageSearch" element={<ImageSearchPage />} />
                <Route path="/Youtube" element={<YoutubePage />} />
                <Route path="/Redux" element={<ReduxPage />} >
                    <Route path="Increment" element={<IncrementPage />} />
                    <Route path="Placeholder" element={<PlaceholderPage /> } />
                    <Route path="PostUserRedux" element={<FormReduxPage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers