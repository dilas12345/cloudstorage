import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Login from './Login';
import Register from './Register';

const style = {
  margin: 15,
};

class Loginscreen extends Component {
  constructor(props){
    super(props);
    var loginButtons=[];
    loginButtons.push(
      <div>
      <MuiThemeProvider>
        <div>
           <RaisedButton label={"Register as Visitor"} primary={true} style={style} onClick={(event) => this.handleClick(event,'student')}/>
       </div>
       </MuiThemeProvider>
       <MuiThemeProvider>
       <div>
          <RaisedButton label={"Register as an Animator"} primary={true} style={style} onClick={(event) => this.handleClick(event,'teacher')}/>
      </div>
      </MuiThemeProvider>
      </div>
    )
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      loginButtons:loginButtons,
      studentbuttonLabel:'Register as a Visitor',
      teacherbuttonLabel:'Register as an Animator',
      isLogin:true
    }
  }
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Login parentContext={this} appContext={this.props.appContext}/>);
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                  loginmessage:loginmessage
                    })
  }
  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    if(this.state.isLogin){
      let loginscreen=[];
      loginscreen.push(<Register parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Already registered.Go to Login";
      let loginButtons=[];
      loginButtons.push(
        <div key="login-button">
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Login"} primary={true} style={style} onClick={(event) => this.handleClick(event,userRole)}/>
         </div>
         </MuiThemeProvider>
        </div>
      )
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
      let loginscreen=[],loginButtons=[];
      loginButtons.push(
        <div>
        <MuiThemeProvider>
          <div>
             <RaisedButton label={"Register as a Visitor"} primary={true} style={style} onClick={(event) => this.handleClick(event,'student')}/>
         </div>
         </MuiThemeProvider>
         <MuiThemeProvider>
         <div>
            <RaisedButton label={"Register as an Animator"} primary={true} style={style} onClick={(event) => this.handleClick(event,'teacher')}/>
        </div>
        </MuiThemeProvider>
        </div>
      )
      loginscreen.push(<Login parentContext={this} appContext={this.props.appContext} role={userRole}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen" key="loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}


export default Loginscreen;
