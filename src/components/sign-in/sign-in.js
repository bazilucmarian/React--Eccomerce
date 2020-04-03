import React from 'react'
import FormInput from '../form-input/form-input'
import './sign-in.scss'
import CustomButton from '../buttons/button'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        

        this.state={
            email: '',
            password: ''
        }
    }
    
    handleSubmit=event=>{
        event.preventDefault();
        this.setState({email: '', password:''})
    }
    handleChange=event=>{
        const {value, name}=event.target;
        this.setState({ [name]: value})
       
    }


render(){
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onClick={this.handleSubmit}>

                <FormInput
                handleChange={this.handleChange}
                 type="email"
                  value={this.state.email} 
                  name="email"
                  label='email'
                  required/>
                

                <FormInput
                 type="password" 
                 handleChange={this.handleChange}
                 value={this.state.password}
                  name="password" 
                  label='password'
                  required/>
              <div className="buttons">
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton   
        onClick={signInWithGoogle}
        isGoogleSignIn
        >Sign In with Google</CustomButton>
        </div>
            </form>
        </div>
    )
}

}
export default SignIn;