import React from 'react'
import './E_Amount.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import E_Amount from './E_Amount.js'


class Network extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: localStorage.getItem('Amount')}
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/network' exact strict render={() => {
					return(
						<div id='container' className='main'>
							<h1> Please Select Your Network </h1>
							<div id="right">
								<button><Link to='/e_amount' className='effect' > GLO </Link></button><br /><br /><br />							
								<button><Link to='/e_amount' className='effect' > MTN </Link></button><br /><br /><br />							
								<button><Link to='/e_amount' className='effect' > AIRTEL </Link></button><br /><br /><br />
								<button><Link to='/e_amount' className='effect' > 9MOBILE </Link></button><br /><br /><br />														
                            </div>
				 		</div>
				 	);}} />
				<Route path='/e_amount' exact strick render={(routeProps) => <E_Amount {...routeProps} debit={this.state.Debit} />} />
			</div>
			</Router>
		)
	}
}
export default Network