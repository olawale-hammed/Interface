import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Login from '../index'
import Message from './Message'
import Message2 from './Message2'


class Other_Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {input: '', Debit: localStorage.getItem('Amount'), status: false,
		 error: 'Input value must be four digits and cannot be empty', amount: null}
		this.inputRef = React.createRef()
	}
	componentDidMount(){
		this.inputRef.current.focus()
	}
	handleChange = (e) => {
		this.setState({input: e.target.value, amount: e.target.value})
	}
	handleClick = () => {
		this.setState({Debit: localStorage.getItem('Amount') - this.state.input})
		if(this.state.input.length > 5 || isNaN(this.state.input) || this.state.input === ''){
			document.getElementById('demo').innerHTML = this.state.error
		}else{
			this.setState({status: true})
		}
		
		
	}
	handleRedirect = () => {
		// localStorage.Amount = this.state.Debit
		if(this.state.amount <= localStorage.getItem('Amount')){
			localStorage.Amount = this.state.Debit
		}else{
			return <Redirect to='/message2' />
		}
		if(this.state.status){
			return <Redirect to='/message' />
		}
	}
 	render(){
	return (
		<Router>
			<div >
				<Route path='/others' exact strict render={() => {
					return(
						<div id="container" className='diff'>
							{this.handleRedirect()}
							<h1 > Other Amount </h1>
							<h4 id='demo'> </h4>
							<input id='in' type='text' ref={this.inputRef} onChange={this.handleChange} value={this.input} size='7' maxLength='7'/>
							<div>
								<button id='bt' onClick={this.handleClick}> PROCEED </button><br /><br /><br />
								<button id='bt'><Link to='/' className='effect' > EXIT </Link></button>                              	
                            </div>						
				 		</div>
                     );
                }} />
				<Route path="/" exact strict component={Login} />
				<Route path="/message" exact strict component={Message} />
				<Route path="/message2" exact strict component={Message2} />
			</div>
		</Router>
	)
    }
}
export default Other_Amount
