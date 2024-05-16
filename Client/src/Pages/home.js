import React from "react";
import '../Style/frontpage.css';        // importing css
import Banner from "./Banner";
import QuickSearch from "./QuickSearch";
import axios from "axios";

class Homepage extends React.Component{
    constructor(){
        super();
        this.state = {       // thi.state is used to retrieve data
            loc: [],
            mealtype: []
        }
    }

    componentDidMount(){
        // for location API
        axios({
            url: 'http://localhost:5500/location',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ loc: res.data.location })  // set.State is used to update(edit/change) the data in this.state
        })
        .catch((err => console.log(err)));

        // For Mealtype API
        axios({
            url: 'http://localhost:5500/mealtype',
            method: 'get',
            headers: { 'Content-Type': 'application/JSON'}
        })
        .then(res => {
            this.setState({ mealtype: res.data.meal })  // set.State is used to update(edit/change) the data in this.state
        })
        .catch((err => console.log(err)))
    }
    render(){
        const { loc, mealtype } = this.state; // calling of the state.
        //console.log(loc);
        return(
            <div>
                <div class="wrapper">
                    {/* Banner Part (upper part) */}
                    <Banner locationData = { loc }/>
                    
                    {/* Quick search Part (down part) */}
                    <QuickSearch mealtypeData = { mealtype } />
                
                </div>
            </div>
        )
    }
}

export default Homepage