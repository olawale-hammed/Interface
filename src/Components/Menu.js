import React from 'react'
import './Menu.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index.js'
import AccountType from './Account_Type'
import AccountType_Balance  from './Account_Type_Balance'
import Network from './Network'
import AccountType_Transfer from './Account_Type_Transfer';
import Change_Pin from './Change_Pin';

class Menu extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: this.props.debit, pin: this.props.pin}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/menu' exact strict render={() => {
					return(
						<div id='container' className='main'>
							<h1> Please Select Your Choice </h1>
							<div id="right">
								<button><Link to='/acc_type' className='effect' > WITHDRAWAL</Link></button><br /><br /><br />							
								<button><Link to='/acctype_balance' className='effect' > BALANCE </Link></button><br /><br /><br />							
								<button><Link to='/acctype_transfer' className='effect' > TRANSFER </Link></button>
							</div>
							<div id="left">
								<button><Link to='/network' className='effect' > E-TOPUP </Link></button><br /><br /><br />							
								<button ><Link to='/change_pin' className='effect' > CHANGE PIN </Link></button><br /><br /><br />					
								<button ><Link to='/' className='effect'> EXIT </Link></button>
							</div>
								
				 		</div>
				 	);}} />
				<Route path='/acc_type' exact strick render={(routeProps) => <AccountType {...routeProps} debit={this.state.Debit} pin={this.state.pin}/>} />
				<Route path='/acctype_balance' exact strick render={(routeProps) => <AccountType_Balance {...routeProps} debit={this.state.Debit} pin={this.state.pin}/>} />
				<Route path='/acctype_transfer' exact strick component={AccountType_Transfer} />
				<Route path='/network' exact strick component={Network} />
				<Route path='/change_pin' exact strick component={Change_Pin} />
				<Route path='/' exact strick component={Login} />
			</div>
			</Router>
		)
	}
}
export default Menu