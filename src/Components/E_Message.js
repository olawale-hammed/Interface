import React from 'react'
import './T_Message.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Menu from './Menu';

class E_Message extends React.Component{
	render(){
		return(
			<Router>
			<div >
				<Route path='/e_message' exact strict render={() => {
					return(
						<div id="container">
							<h1 id="co"> CONGRATULATION </h1>
				            <p>You have recharged the sum of <s>N</s>{this.props.amount} to {this.props.number} successfully</p>
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
export default E_Message
