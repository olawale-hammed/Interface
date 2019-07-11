import React from 'react'
import './Change_Pin.css'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Message from './Message'
import Login from '../index.js'

class Change_Pin extends React.Component{
	constructor(props){
		super(props)
		this.inputRef = React.createRef()
	}
	componentDidMount(){
		this.inputRef.current.focus()
	}
	render(){
		return(
			<Router>
			<div >
				<Route path='/change_pin' exact strict render={() => {
					return(
						<div id='container' className='amount'>
							<h1> CHANGE YOUR PIN</h1>
							<div id="centre">
								Old Pin <input id="put" type="text" ref={this.inputRef} size="4" maxLength="4"></input><br /><br />
								New Pin <input id="put" type="text" size="4" maxLength="4"></input><br /><br />
                                Retype New Pin <input id="put" type="text" size="4" maxLength="4"></input><br /><br />
                                <button><Link to='/' className='effect' > SUBMIT </Link></button> <tab></tab>                                                              
                                <button><Link to='/' className='effect' > EXIT </Link></button>                              
                            </div>								
				 		</div>
				 	);}} />
				<Route path='/message' exact strick component={Message} />
				<Route path='/' exact strick component={Login} />
			</div>
			</Router>
		)
	}
}
export default Change_Pin