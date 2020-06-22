import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
 <div>
    <h1>Info</h1>
    <p>This info is:{props.info}</p>
    </div>
)

//Higher Order Component

const withAdminWarning=(WrappedComponent)=>{
return(props)=>(
<div>
{props.isAdmin && <p>This is priveledged information</p>}
<WrappedComponent {... props} />
</div>
)
}

const requireAuthentication=(WrappedComponent)=>{
return(props)=>(
<div>
{props.isAuthenticated ? <WrappedComponent {... props} />:<p>You must Login to see the information</p>}
</div>
)
}


const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info='This is some info'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false } info='This is some info'/>,document.getElementById('app'));