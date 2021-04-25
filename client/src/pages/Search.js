import React from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";

function Search(){
    return(
        <div className="container-fluid">
            <Jumbotron/>
            <SearchForm/>
            {/* <SearchResults /> */}
        </div>
    )
}

export default Search;