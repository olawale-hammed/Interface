import React from 'react'
import './Bank_List.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Account_Number from './Account_Number';

class Bank_List extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/bank_list' exact strict render={() => {
					return(
						<div id="container" className='banklist'>
							<h1> Please Select Recipient Bank </h1>
							<div id="right">
								<button><Link to='/acc_number' className='effect' > ACCESS BANK </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > ECOBANK  </Link></button><br /><br />	
								<button><Link to='/acc_number' className='effect' > FIDELITY </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > FIRST BANK </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > GTB BANK </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > HERITAGE </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > JAIZ BANK </Link></button>	
							</div>
							<div id="left">
								<button><Link to='/acc_number' className='effect' > KEYSTONE </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > POLARIS </Link></button><br /><br />																
								<button><Link to='/acc_number' className='effect' > STANBIC </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > UNION BANK </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > UBA BANK </Link></button><br /><br />
								<button><Link to='/acc_number' className='effect' > UNITY BANK </Link></button><br /><br />
								<button><Link to='/' className='effect' > EXIT </Link></button>
							</div>
								
				 		</div>
				 	);}} />
					<Route path="/acc_number" exact strict component={Account_Number} />
					<Route path="/" exact strict component={Login} />
			</div>
			</Router>
		)
	}
}
export default Bank_List
 