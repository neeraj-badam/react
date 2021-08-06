import React, { Component } from 'react'
import Select from './Select'
import axios from 'axios'

export class CreateUser extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email : '',
            username : '',
            branch : 'Select Branch'
        }
    }

    changeInputHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    submitForm = () => {
        axios.post('http://localhost:8000/users/createUser',this.state)
        .then((res)=>{
            const status = res.data;
            console.log(status)
        })
    }
    
    render() {
        const options = ['Select Branch','IT','CSE','ECE','Civil','EEE','Mech']
        return (
            <div className="container">
                <form>
                    <div className="row">
                        <div className="col-6 col-lg-6 col-sm-6">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-6 col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Enter email" onChange={this.changeInputHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-6 col-sm-6">
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="col-6 col-lg-6 col-sm-6">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" value={this.state.username} placeholder="Enter Username" onChange={this.changeInputHandler} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-lg-6 col-sm-6">
                            <label htmlFor="branch">Branch</label>
                        </div>
                        <div className="col-6 col-lg-6 col-sm-6">
                            <div className="form-group">
                                <select className="form-control" value={this.state.branch} name="branch"  onChange={this.changeInputHandler}>
                                    {
                                        options.map((option)=>{
                                            return <Select key={option} option={option}/>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-6">
                            <div className="form-group">
                                <button type="button" onClick={this.submitForm} className="btn btn-lg btn-primary">Create User</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateUser