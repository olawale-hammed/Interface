import React from 'react'
import './Account_Type.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Message_Balance from './Message_Balance'
import Menu from './Menu'

class AccountType_Balance extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: this.props.debit}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/acctype_balance' exact strict render={() => {
					return(
						<div id="container" className='acc'>
							<h1> Please Select Your Choice </h1>
							<div id="right">
								<button><Link to='/msg_balance' className='effect' > CURRENT </Link></button><br /><br /><br />
								<button><Link to='/msg_balance' className='effect' > SAVINGS </Link></button><br /><br /><br />
							</div>
							<div id="left">
								<button><Link to='/menu' className='effect' > BACK </Link></button><br /><br /><br />
								<button><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />
							</div>
								
				 		</div>
				 	);}} />
					<Route path="/msg_balance" exact render={(routeProps) => (<Message_Balance {...routeProps} debit={this.state.Debit} />)} />
					<Route path="/menu" exact strict component={Menu} />
					<Route path="/" exact strict component={Login} /> 
			</div>
			</Router>
		)
	}
}
export default AccountType_Balance 
 