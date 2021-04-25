import React from "react";
import Jumbotron from "../components/Jumbotron";
import SavedBooks from "../components/SavedBooks";

function Saved(){
    return(
        <div className="container-fluid">
            <Jumbotron/>
            <SavedBooks/>
        </div>
    )
}

export default Saved