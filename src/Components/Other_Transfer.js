import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import T_Message from './T_Message'
import Message2 from './Message2'


class Other_Transfer extends React.Component{
	constructor(props){
		super(props)
		this.state = {input: null, Debit: localStorage.getItem('Amount'), status: false,
		 acc_num: this.props.acc_num, amount: this.props.amount}
		 this.inputRef = React.createRef()
	}
	componentDidMount(){
		this.inputRef.current.focus()
	}
	handleChange = (e) => {
		this.setState({input: e.target.value, amount: e.target.value})
	}
	handleClick = () => {
		this.setState({Debit: localStorage.getItem('Amount') - this.state.input, status: true})
	}
	handle_Redirect = () => {
		if(this.state.amount <= localStorage.getItem('Amount')){
			localStorage.Amount = this.state.Debit
		}
		else{
			return <Redirect to='/message2' />
		}
		if(this.state.status){
			return <Redirect to='/t_message' />
		}
	}
 	render(){
	return (
		<Router>
			<div >
				<Route path='/other_transfer' exact strict render={() => {
					return(
						<div id="container" className='diff'>
							{this.handle_Redirect()}
							<h1 > Other Amount </h1>
							<input id='in' type='text' ref={this.inputRef} onChange={this.handleChange} value={this.input} size='5' maxLength='5'/>
							<div>
								<button id='bt' onClick={this.handleClick}> PROCEED </button><br /><br /><br />
								<button id='bt'><Link to='/' className='effect' > EXIT </Link></button>                              	
                            </div>						
				 		</div>
                     );
                }} />
				<Route path="/" exact strict component={Login} />
				<Route path="/message2" exact strict render={(routeProps) => <Message2 {...routeProps} acc_num={this.state.acc_num} amount={this.state.amount} /> } />				
				<Route path="/t_message" exact strict render={(routeProps) => <T_Message {...routeProps} acc_num={this.state.acc_num} amount={this.state.amount} /> } />
			</div>
		</Router>
	)
    }
}
export default Other_Transfer
