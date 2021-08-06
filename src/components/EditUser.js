import React, { Component } from 'react'
import Select from './Select'
import axios from 'axios'

export class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id : '',
            email : '',
            username : '',
            branch : ''
        }
    }
    componentDidMount()
    {
        this.setState({
            id : this.props.match.params.id
        })
        axios.get('http://localhost:8000/users/display/'+this.props.match.params.id)
        .then((res)=>{
            const data = res.data[0]
            console.log(data)
            this.setState({
                email : data.email,
                username : data.username,
                branch : data.branch
            })
        })
    }
    changeInputHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    submitForm = () => {
        axios.put('http://localhost:8000/users/editUser/'+this.state.id,this.state)
        .then((res)=>{
            const data = res.data
            console.log(data)
        })
    }    
    render() {
        const options = ['Select Branch','IT','CSE','ECE','Civil','EEE','Mech']
        return (
            <div className="container">
                <form>
                    <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Enter email" onChange={this.changeInputHandler} />
                    <input type="text" className="form-control" name="username" value={this.state.username} placeholder="Enter Username" onChange={this.changeInputHandler} />
                    <select className="form-control"  name="branch" value={this.state.branch}  onChange={this.changeInputHandler}>
                                    {
                                        options.map((option)=>{
                                            return <Select key={option} option={option}/>
                                        })
                                    }
                                </select>
                    <button type="button" onClick={this.submitForm} className="btn btn-lg btn-primary">Create User</button>
                </form>
            </div>
        )
    }
}

export default EditUser
