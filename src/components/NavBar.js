import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'



function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">Users</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li><Link to="/create">Create</Link></li>
                    <li><Link to="/display">Display</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
