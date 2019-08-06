import React from 'react'
import './Amount.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Message from './Message'
import Message2 from './Message2'
import Login from '../index.js'
import Other_Amount from './Other_Amount'
import axios from 'axios'

class Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: 0, status: false, amount: 0, pin: this.props.pin}
	}
	handleClick = (e) => {
		this.setState({Debit: this.props.debit - e.target.value, amount: e.target.value, status: true})
	}
	handleRedirect = ()	=> {
	if(this.state.amount <= this.state.Debit){
		axios.put(`http://localhost:8080/api/contacts/${this.state.pin}`, {balance: this.state.Debit}).then((rs) => console.log('Done',rs)
		).catch(err => console.log(err))
		if(this.state.status){
			console.log(this.state.amount)
			return <Redirect to='/message' />
		}
		
	}else{
		console.log(this.state.amount)
		return <Redirect to='/message2' />
	}
	
	}

	render(){
		console.log(this.state.amount)
		console.log(this.state.Debit)
		return(
			<Router>
			<div >
				<Route path='/amount' exact strict render={() => {
					return(
						<div id='container' className='amount'>
							{this.handleRedirect()}
							<h1> Select Amount</h1>
							<div id="right">
								<button value='1000' onClick={this.handleClick}> 1000 </button><br /><br /><br />
								<button value='2000' onClick={this.handleClick}> 2000 </button><br /><br /><br />
								<button value='3000' onClick={this.handleClick}> 3000 </button><br /><br /><br />								
								<button value='10000' onClick={this.handleClick}> 10000 </button>											
							</div>
							<div id="left">
                                <button value='15000' onClick={this.handleClick}> 15000 </button><br /><br /><br />								
                                <button value='20000' onClick={this.handleClick}> 20000 </button><br /><br /><br />								
                                <button value='30000' onClick={this.handleClick}> 30000 </button><br /><br /><br />								
                                <button ><Link to='/others' className='effect' > OTHERS </Link></button>                            
							</div>
                            <div id='submit' >
                                <button><Link to='/' className='effect' > EXIT </Link></button>                               
                            </div>
							<Message />	
				 		</div>
				 	);}} />
				<Route path="/message" exact strict component={Message} />
				<Route path="/message2" exact strict component={Message2} />
				<Route path='/' exact strick component={Login} />
				<Route path='/others' exact strick render={(routeProps) => <Other_Amount {...routeProps} debit={this.state.Debit} />} />
			</div>
			</Router>
		)
	}
}
export default Amount