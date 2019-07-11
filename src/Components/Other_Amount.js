import React from 'react'
import './Account_Number.css'
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from '../index'
import Message from './Message';


class Other_Amount extends React.Component{
	constructor(props){
		super(props)
		this.state = {input: null, Debit: localStorage.getItem('Amount'), status: false}
		this.inputRef = React.createRef()
	}
	componentDidMount(){
		this.inputRef.current.focus()
	}
	handleChange = (e) => {
		this.setState({input: e.target.value})
	}
	handleClick = () => {
		this.setState({Debit: localStorage.getItem('Amount') - this.state.input, status: true})
	}
	handle_Redirect = () => {
		localStorage.Amount = this.state.Debit
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
				<Route path="/message" exact strict component={Message} />
			</div>
		</Router>
	)
    }
}
export default Other_Amount
