import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Phone_Number from './Phone_Number';


class E_Other_Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {input: null, Debit: localStorage.getItem('Amount'), status: false, amount: null}
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
	handleRedirect = ()	=> {
		if(this.state.amount <= localStorage.getItem('Amount')){
			localStorage.Amount = this.state.Debit
		}else{
			return <Redirect to='/message2' />
		}
		if(this.state.status){
			return <Redirect to='/phone_number' />
		}
	}
 	render(){
	return (
		<Router>
			<div >
				<Route path='/e_others' exact strict render={() => {
					return(
						<div id="container" className='diff'>
							{this.handleRedirect()}
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
				<Route path="/phone_number" exact strict render={(routeProps) => <Phone_Number {...routeProps} amount={this.state.amount}/>} />
			</div>
		</Router>
	)
    }
}
export default E_Other_Amount
