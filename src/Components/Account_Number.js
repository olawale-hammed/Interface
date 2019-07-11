import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import T_Amount from './T_Amount';


class Account_Number extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: localStorage.getItem('Amount'), input: null, number: null}
		this.inputRef = React.createRef()
	}
	componentDidMount(){
		this.inputRef.current.focus()
	}
	handleChange = (e) => {
		this.setState({input: e.target.value, number: e.target.value})
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/acc_number' exact strict render={() =>{
					return(
						<div id='container' className="diff">
							<h2> Please Enter The Recipient Account Number </h2> 
							<input id='in' type='text' ref={this.inputRef} maxLength='10' size='10' onChange={this.handleChange} value={this.input} /><br />
							<button id='bt'><Link to='/t_amount' className='effect' > PROCEED </Link></button><br /><br /><br />
							<button id='bt'><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />		
                            							
						</div>)
				}} />
				<Route path='/t_amount' exact strick render={(routeProps) => <T_Amount {...routeProps} acc_num={this.state.number} />} />
                <Route path='/' exact strick component={Login} />
			</div>
			</Router>
		);
	}
}
export default Account_Number
