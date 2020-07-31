import React from 'react'
import styled from 'styled-components'
import Aloo from './Aloo'
import Beans from './Beans'
import Bananna from './Bananna'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
const PageHeading=styled.h1`
text-align:center;
color:floralwhite;
`
const Body=styled.div`
background:black;
margin:0px;
padding:0px;
font-family:sans-serif;
`
const Button=styled.button`
border:2px solid black;
font-size:25px;
margin-right:5px;
align-items:center;
`
const ReturnButton=styled(Button)`
float:right;
`
function App(){
    return (
        <Router>
            <Body>
                <PageHeading>Curry Maker</PageHeading>
                <div style={{textAlign:"center"}}>
                <Link to="/Aloo"><Button>Aloo</Button></Link>
                <Link to="Beans"><Button>Beans</Button></Link>
                <Link to="Bananna"><Button>Bananna</Button></Link>
                </div><br />
                <Link to="/"><ReturnButton>Back to Home</ReturnButton></Link>
                <Route path="/" exact/>
                <Route path="/Aloo" component={Aloo}/>
                <Route path="/Beans" component={Beans}/>
                <Route path="/Bananna" component={Bananna}/>
            </Body>
        </Router>
    )
}
export default App