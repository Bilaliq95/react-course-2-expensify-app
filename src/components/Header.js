import React from 'react';
import {NavLink} from 'react-router-dom';
import {startLogout, startLogin} from '../Actions/auth';
import {connect} from 'react-redux';

export const Header=({startLogout})=>(
       
    <header>
    <h1>Expensify</h1>
    
    
    <NavLink activeClassName="active-class" to="/dashboard">Dashboard </NavLink> 
    <NavLink activeClassName="active-class" to ="/create">Create </NavLink>
    <NavLink activeClassName="active-class" to ="/edit">Edit </NavLink>
    <button onClick={startLogout}>Logout</button>
    </header>
    )

    const mapDispatchToProps=(dispatch)=>({
        startLogout:()=>dispatch(startLogout())
    })

    export default connect (undefined,mapDispatchToProps)(Header);