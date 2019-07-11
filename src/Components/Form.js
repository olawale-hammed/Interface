import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Login from '../index'

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {user: '', rememberMe: false}
    }
    handleChange = (e) =>{
        const input = e.target
        const value = input.type === 'checked' ? input.user : input.value
        this.setState({ [input.name]: value })
    }
    handleSubmit = () =>{
        const { user, rememberMe } = this.state
        localStorage.setItem('rememberMe', rememberMe)
        localStorage.setItem('user', rememberMe ? user : '')
    }
    render(){
        return(
            <Router>
            <div>
                <Route path = '/form' exact strict render={() =>{ 
                    return (
                    <div>
                        <form onSubmit={this.handleSubmit}> 
                        <label>
                            User: <input name='user' type='text' value= {this.state.user} onChange={this.handleChange} />
                        </label>
                        <label>
                            <input name='rememberMe' type='checkbox' checked= {this.state.rememberMe} onChange={this.handleChange} /> Remember me
                        </label>
                        <button type= 'submit'> Sign in </button><br />
                        <button><Link to='/' > EXIT </Link></button>
                        </form>
                    </div>
                )}} />
                <Route path="/" exact strict component={Login} />
            </div>
            </Router>
        )

    }
}
export default Form

