import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navigasi from '../../components/partials/nav'

const ReduxPage = () => {
    return (
        <>
            <Navigasi />
            <div class="ui cards" style={{ marginLeft: "50px" }}>
                <Link to="Increment" className="card">
                    <div class="content">
                        <div class="header">Increment</div>
                    </div>
                </Link>
                <Link to="Placeholder" className="card">
                    <div class="content">
                        <div class="header">Placeholder</div>
                    </div>
                </Link>
                <Link to="PostUserRedux" className="card">
                    <div class="content">
                        <div class="header">User Post Redux</div>
                    </div>
                </Link>
            </div>
            <div style={{ marginTop: "50px" }}>
                <Outlet />
            </div>
        </>
    )
}

export default ReduxPage