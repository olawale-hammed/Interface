import React from 'react'
import './Message.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Menu from './Menu';

class Message extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/message' exact strict render={() => {
					return(
						<div id="container">
							<h1 > Successful</h1>
							<h2>Please take your cash.</h2>
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
export default Message

