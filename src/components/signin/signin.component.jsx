import React from 'react';

import CustomButton from '../custom-button.component/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './signin.styles.scss';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handelSubit = event => {
		event.preventDefault();

		this.setState({ email: '', password: ''})
	}

	handelChange = event => {
		const { value, name} = event.target;

		this.setState({ [name]: value})
	}

render() {
	return(
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={this.handelSubit}>
				<FormInput 
			name="email" 
					type="email" 
					value={ this.state.email} 
					handelChange={this.handelChange} 
					label='email'	required
					/>
				<FormInput
					name="password" 
					type="password" 
					value={ this.state.password} 
					handelChange={this.handelChange} 
					label='password'	required
					/>
				<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
			</form>

		</div>
	)
}

}

export default SignIn;