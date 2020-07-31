
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function Beans(){
    const HamHockAndWhiteBeansStew=()=>{
        return (
            <div>
                <h1 style={{color:"white"}}>Ham Hock and White Bean Stew</h1>
                <h2 style={{color:"white"}}>Ingredients</h2>
                <ol style={{color:"yellow"}}>
                    <li>Hi</li>
                </ol>
            </div>
        )
    }
    return (
        <Router>
            <Link to="HamHockAndWhiteBeansStew"><button>Ham Hock and White Bean Stew</button></Link>
            <Route path="/HamHockAndWhiteBeansStew" component={HamHockAndWhiteBeansStew}/>
        </Router>
    
    )
}
export default Beans