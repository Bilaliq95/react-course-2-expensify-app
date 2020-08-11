import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../Actions/auth'

const LoginPage=({startLogin})=>(
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify</h1>
        <p>Get Your Expenses Under Control!</p>
        <button className="button" onClick={startLogin}>Login Using Google</button>
        </div>
        </div>
        )


const mapDispatchToProps=(dispatch)=>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage);