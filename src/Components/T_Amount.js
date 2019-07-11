import React from 'react'
import './Amount.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import T_Message from './T_Message'
import Message2 from './Message2'
import Login from '../index.js'
import Other_Transfer from './Other_Transfer';

class T_Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: localStorage.getItem('Amount'), acc_number: this.props.acc_num, status: false, amount: null}
	}
	handleClick = (event) => {
		this.setState({Debit: localStorage.getItem('Amount') - event.target.value, status: true, amount: event.target.value})
	}
	handleRedirect = ()	=> {
		if(this.state.amount <= localStorage.getItem('Amount')){
			localStorage.Amount = this.state.Debit
		}else{
			return <Redirect to='/message2' />
		}
		if(this.state.status){
			return <Redirect to='/t_message' />
		}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/t_amount' exact strict render={() => {
					return(
						<div id='container' className='amount'>
							{this.handleRedirect()}
							<h1> Select Amount</h1>
							<div id="right">
								<button value='1000' onClick={this.handleClick}> 1000 </button><br /><br /><br />
								<button value='2000' onClick={this.handleClick}> 2000 </button><br /><br /><br />
								<button value='5000' onClick={this.handleClick}> 5000 </button><br /><br /><br />
								<button value='10000' onClick={this.handleClick}> 10000 </button>											
							</div>
							<div id="left">
                                <button value='15000' onClick={this.handleClick}> 15000 </button><br /><br /><br />								
                                <button value='20000' onClick={this.handleClick}> 20000 </button><br /><br /><br />								
                                <button value='30000' onClick={this.handleClick}> 30000 </button><br /><br /><br />								
                                <button ><Link to='/other_transfer' className='effect' > OTHERS </Link></button>                            
							</div>
                            <div id='submit' >
                                <button><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />                               
                            </div>
								
				 		</div>
				 	);}} />
				<Route path='/t_message' exact strick render={(routeProps) => <T_Message {...routeProps} acc_num={this.state.acc_number} amount={this.state.amount} /> } />
				<Route path='/message2' exact strick render={(routeProps) => <Message2 {...routeProps} acc_num={this.state.acc_number} amount={this.state.amount} /> } />				
				<Route path='/other_transfer' exact strick render={(routeProps) => <Other_Transfer {...routeProps} acc_num={this.state.acc_number} amount={this.state.amount} /> } />
				<Route path='/' exact strick component={Login} />
			</div>
			</Router>
		)
	}
}
export default T_Amount