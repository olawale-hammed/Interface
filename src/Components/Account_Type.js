import React from 'react'
import './Account_Type.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Amount from './Amount'
import Menu from './Menu'

class AccountType extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: this.props.debit}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/acc_type' exact strict render={() => {
					return(
						<div id="container" className='acc'>
							<h1> Please Select Your Choice </h1>
							<div id="right">
								<button><Link to='/amount' className='effect' > CURRENT </Link></button><br /><br /><br />
								<button><Link to='/amount' className='effect' > SAVINGS </Link></button><br /><br /><br />
							</div>
							<div id="left">
								<button><Link to='/menu' className='effect' > BACK </Link></button><br /><br /><br />
								<button><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />
							</div>
								
				 		</div>
				 	);}} />
					 <Route path="/amount" exact strict render={(routeProps) => (<Amount {...routeProps} debit={this.state.Debit} />)} />
					 <Route path="/menu" exact strict component={Menu} />
					<Route path="/" exact strict component={Login} />
			</div>
			</Router>
		)
	}
}
export default AccountType
 