import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=()=>(
       
    <header>
    <h1>Expensify</h1>
    
    
    <NavLink activeClassName="active-class" to="/" exact={true}>Dashboard </NavLink> 
    <NavLink activeClassName="active-class" to ="/create">Create </NavLink>
    <NavLink activeClassName="active-class" to ="/edit">Edit </NavLink>
    <NavLink activeClassName="active-class" to="help">Help </NavLink>
    
    </header>
    
    
    
    )


    export default Header;