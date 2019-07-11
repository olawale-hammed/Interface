import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import E_Message from './E_Message';


class Phone_Number extends React.Component{
	constructor(props){
		super(props)
		this.state = {Debit: localStorage.getItem('Amount'), input: null, number: null, amount: this.props.amount}
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
				<Route path='/phone_number' exact strict render={() =>{
					return(
						<div id='container' className="diff">
							<h2> Please Enter Your Phone Number </h2> 
							<input id='in' type='text' ref={this.inputRef} maxLength='11' size='11' onChange={this.handleChange} value={this.input} /><br />
							<button id='bt'><Link to='/e_message' className='effect' > PROCEED </Link></button><br /><br /><br />
							<button id='bt'><Link to='/' className='effect' > EXIT </Link></button><br /><br /><br />		
                            							
						</div>)
				}} />
				<Route path='/e_message' exact strick render={(routeProps) => <E_Message {...routeProps} number={this.state.number} amount={this.state.amount} />} />
                <Route path='/' exact strick component={Login} />
			</div>
			</Router>
		);
	}
}
export default Phone_Number
