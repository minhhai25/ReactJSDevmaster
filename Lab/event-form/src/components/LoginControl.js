import React from 'react'
import LoginComp from './LoginComp';
import LogoutComp from './LogoutComp';

export default function LoginControl() {
    var LoginControl= (props)=>{
        const isLoggedIn=props.isLoggedIn;
        if(isLoggedIn){
      return <LoginComp></LoginComp>;}
      return <LogoutComp/>
    }
}
