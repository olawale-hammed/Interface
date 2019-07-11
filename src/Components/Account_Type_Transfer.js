import React from 'react'
import './Account_Type.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Menu from './Menu'
import Bank_List from './Bank_List';

class AccountType_Transfer extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/acctype_transfer' exact strict render={() => {
					return(
						<div id="container" className='acc'>
							<h1> Please Select Your Choice </h1>
							<div id="right">
								<button><Link to='/bank_list' className='effect' > CURRENT </Link></button><br /><br /><br />
								<button><Link to='/bank_list' className='effect' > SAVINGS </Link></button><br /><br /><br />
							</div>
							<div id="left">
								<button><Link to='/menu' className='effect' > BACK </Link></button><br /><br /><br />
								<button><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />
							</div>
								
				 		</div>
				 	);}} />
					 <Route path="/bank_list" exact strict component={Bank_List} />
					 <Route path="/menu" exact strict component={Menu} />
					<Route path="/" exact strict component={Login} />
			</div>
			</Router>
		)
	}
}
export default AccountType_Transfer 
 