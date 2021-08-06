import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Row({user}) {
    const handle = (id) =>{
        console.log(id)
        axios.delete('http://localhost:8000/users/delete/'+id)
        .then((res)=>{
            const data = res.data
            if(data.deleted)
                window.location.reload();
        })
    }
    return (
        <React.Fragment>
            <td>
                {user.email}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.branch}
            </td>
            <td>
                <Link to={`/edit/${user._id}`}>
                    <button id={user._id}>Update</button>
                </Link>
            </td>
            <td>
                <button onClick={()=>handle(user._id)}>Delete</button>
            </td>
        </React.Fragment>
    )
}

export default Row
