import React from 'react'
import './Message.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Menu from './Menu';

class Message2 extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/message2' exact strict render={() => {
					return(
						<div id="container">
							<h1 ><strong> Alert </strong></h1>
							<h1 className='blink'><strong> Insufficient Fund!!!. </strong></h1>
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
export default Message2

