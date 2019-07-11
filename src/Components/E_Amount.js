import React from 'react'
import './Amount.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index.js'
import Message2 from './Message2'
import Phone_Number from './Phone_Number';
import E_Other_Amount from './EO_Amount';

class E_Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: this.props.debit, status: false, amount: null}
	}
	handleClick = (e) => {
			this.setState({Debit: this.props.debit - e.target.value, amount: e.target.value, status: true})
		}
	handleRedirect = ()	=> {
		if(this.state.amount <= localStorage.getItem('Amount')){
			localStorage.Amount = this.state.Debit
		}else{
			return <Redirect to='/message2' />
		}
		if(this.state.status){
			return <Redirect to='/phone_number' />
		}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/e_amount' exact strict render={() => {
					return(
						<div id='container' className='amount'>
							{this.handleRedirect()}
							<h1> Select Amount</h1>
							<div id="right">
								<button value='100' onClick={this.handleClick}> 100 </button><br /><br /><br />
								<button value='200' onClick={this.handleClick}> 200 </button><br /><br /><br />
								<button value='500' onClick={this.handleClick}> 500 </button><br /><br /><br />
							</div>
                            <div id='left' >
								<button value='1000' onClick={this.handleClick}> 1000 </button><br /><br /><br />											
                                <button><Link to='/e_others' className='effect' > OTHERS </Link></button><br /><br /><br />                               							
                                <button><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />                               
                            </div>
								
				 		</div>
				 	);}} />
				<Route path='/phone_number' exact strick render={(routeProps) => <Phone_Number {...routeProps} amount={this.state.amount}/>} />
				<Route path='/message2' exact strick render={(routeProps) => <Message2 {...routeProps} amount={this.state.amount} debit={this.state.Debit}/>} />				
				<Route path='/e_others' exact strick render={(routeProps) => <E_Other_Amount {...routeProps} amount={this.state.amount} debit={this.state.Debit}/>} />				
				<Route path='/' exact strick component={Login} />
			</div>
			</Router>
		)
	}
}
export default E_Amount