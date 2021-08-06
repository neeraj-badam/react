import React, { Component } from 'react'
import axios from 'axios'
import Row from './Row'
export class DisplayUsers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users : []
        }
    }
    
    componentDidMount()
    {
        axios.get('http://localhost:8000/users/display')
        .then((res)=>{
            console.log(res)
            this.setState({users : res.data})
        })
    }
    
    render() {
        const users = this.state.users
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>E-mail</th>
                            <th>Username</th>
                            <th>Branch</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return (
                                    <tr key={user._id}>
                                        <Row user={user}/>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayUsers
