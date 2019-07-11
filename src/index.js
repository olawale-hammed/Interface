import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Menu from './Components/Menu'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state = {input: '', status: false, error: 'Input value must be four digits and cannot be empty', Amount: 50000}
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
		this.setState({input: e.target.value})
	}
	handleSubmit = () => {
		if(this.state.input.length < 4 || isNaN(this.state.input) || this.state.input === null){
			document.getElementById('demo').innerHTML = this.state.error
		}else{
			this.setState({status: true})
			localStorage.setItem('Amount', this.state.Amount)
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
							<h4 id='demo'> </h4>
							<input type='text' ref={this.setCbRef} onChange={(e) => this.handleChange(e)} size='4' maxLength='4' value={this.input}/><br />
							<button id="diff" onClick={this.handleSubmit}> Submit </button> 
						</div>)
				}} />
				<Route path='/menu' exact strick component={Menu} />
				 
			</div>
			</Router>
		);
	}
}
export default Login
ReactDOM.render(
<Login />, document.getElementById('root'))
