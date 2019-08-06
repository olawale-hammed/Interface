import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Menu from './Components/Menu'
import axios from 'axios'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {pin: '', status: false, error: 'Input value must be four digits and cannot be empty', err: '', Amount: null}
		// this.inputRef = React.createRef()
		this.cbRef = null
		this.setCbRef = event => this.cbRef = event
	}
	componentDidMount(){
		// this.inputRef.current.focus()
		this.cbRef.focus()		
	}
	handleRedirect = ()=>{
		if(this.state.status){
			return <Redirect to='/menu' />
		}
	}
	handleChange = (e) =>{
		this.setState({pin: e.target.value})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.pin.length < 4 || isNaN(this.state.pin)){
			document.getElementById('demo').innerHTML = this.state.error
		}else{
			axios.get(`http://localhost:8080/api/contacts/${this.state.pin}`).then(res => {
				if(res.data.pin){
					console.log(res)	
					this.setState({status: true, Amount: res.data.balance})
					// localStorage.setItem('Amount', res.data.balance)
				}		
			}).catch((prevState) => this.setState({err: 'Incorrect pin', pin: prevState.pin}))
		}
	}
	
	render(){
		return(
			<Router>
			<div >
				<Route path='/' exact strict render={() =>{
					return(
						<div id='container' className="diff">
							{this.handleRedirect()}
							<h1> Welcome </h1>
							<h2> Please Enter Your Digit Number </h2> 
							<h4 id='demo'> </h4>  <h4>{this.state.err}</h4>
							<form action='/menu' >
								<input name='pin' type='password' ref={this.setCbRef} onChange={this.handleChange} 
									size='4' maxLength='4' value={this.input}/><br />
								<button type='submit' id="diff" onClick={this.handleSubmit}> Submit </button> 
							</form>
						</div>)
				}} />
				<Route path='/menu' exact strict render={(routeProps) => 
						(<Menu {...routeProps} debit={this.state.Amount} pin={this.state.pin}/>)} />
				 
			</div>
			</Router>
		);
	}
}
export default Login
ReactDOM.render(
<Login />, document.getElementById('root'))
