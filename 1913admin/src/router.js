import React from 'react'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import Login from './component/login/index'
import Admin from './component/admin/index'
class Adminrouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to="/admin"></Redirect>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/login' component={Login}></Route>
                    
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Adminrouter