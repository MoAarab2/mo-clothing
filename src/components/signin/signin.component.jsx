import React from 'react';

import CustomButton from '../custom-button.component/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './signin.styles.scss';

class SignIn extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handelSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: ''});
		} catch(error)  {
			console.log(error);
		}

	};

	handleChange = event => {
		const { value, name} = event.target;

		this.setState({ [name]: value})
	}

render() {
	return(
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={this.handelSubmit}>
				<FormInput 
			name="email" 
					type="email" 
					value={ this.state.email} 
					handleChange={this.handleChange} 
					label='email'	required
					/>
				<FormInput
					name="password" 
					type="password" 
					value={ this.state.password} 
					handleChange={this.handleChange} 
					label='password'	required
					/>
					<div className='button'>
				<CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
				<CustomButton onClick={signInWithGoogle} isGoogleSignIn> 
				{' '}
				Sign in with Google{' '}
				</CustomButton>
				</div>
			</form>

		</div>
	)
}

}

export default SignIn;