import React from 'react'
import './Amount.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Menu from './Menu';

class Message_Balance extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/msg_balance' exact strict render={() => {
					return(
						<div id="container">
							<h1 > Account Balance </h1>
							<h2> Balance: <s>N</s> {this.props.debit}</h2>
							<div>
								<button id='rth'><Link to='/menu' className='effect' > MENU </Link></button><br /><br /><br />                              	                                
								<button id='rth'><Link to='/' className='effect' > EXIT </Link></button>                             	
                            </div>						
				 		</div>
                     );
                }} />
				<Route path="/" exact strict component={Login} />
				<Route path="/menu" exact strict component={Menu} />
			</div>
			</Router>
		)
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
export default Message_Balance
