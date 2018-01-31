import React from 'react'


class LoginEmail  extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      pass:''
    }
  }
  render () {
    return(
      <div  className="loginOption container">
        <div className="row">
          <div className="col-md-4 col-sm-10 col-center-block">
                <form >
                  <p>Login</p>
                  <label htmlFor ="email">Email</label> <br/>
                  <input className="fullWidth" id="email" name="email" type="text" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/><br/>
                  <label  htmlFor ="pass">Password</label><br/>
                  <input className="fullWidth" id="pass" name="pass" type="password" value={this.state.pass} onChange={(e)=> this.setState({pass: e.target.value})} /><br/>
                  <button type='submit' className="fullWidth">Login</button>
            </form>


        </div>
        </div>

      </div>
    )
  }
}

export default LoginEmail;
