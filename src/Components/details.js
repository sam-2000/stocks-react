import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import App from "../App";


function stock1() {
    return (
        <div>temp1[0]</div>
    );
}

function stock2() {
    return (
        <div>temp1[1]</div>
    );
}

function stock3() {
    return (
        <div>temp1[2]</div>
    );

}
function Details() {
    return (
        <Router>
            <div>
                <Switch>
                    
                    <Route path="/stockdetails/Tesco%20PLC">
                        <stock1/>
                     </Route>   
                    <Route path="/stockdetails/Tesco%20plc">
                        <stock2/>
                    </Route>    
                    <Route path="/stockdetails/Tesco%20plc">
                        <stock3/>
                    </Route>    
                    <Route path="/stockdetails" >
                        
                        </Route>

                </Switch>
            </div>
        </Router>
    )
}

export default Details;