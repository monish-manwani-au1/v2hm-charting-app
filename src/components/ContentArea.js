import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import ChartData from "./ChartData";
import Dashboard from "./Dashboard";
import CSVFileUploader from "./CsvFileUploader.js";
import CreateChart from "./CreateChart.js";
import Profile from "./Profile.js";
import Logout from "./logout.js";
import {getUserAccess} from "../store/api/index.js";
class ContentArea extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        name: ""
      }
    }

    componentDidMount(){
      
      let user = getUserAccess();
        
        this.setState({
            name: user.name
            
        })
    }

  render() {
    return (
      <div className="col-md-10 p-0">
        <ul className="nav justify-content-end bg-primary pr-5 text-light">
          <li className="nav-item p-4">Notifications</li>
          <li><Link to="/app/profile" className="nav-link text-light pt-4 mt-0">
                Profile
              </Link> </li>
          
          <li className="nav-item p-4">Hello, {this.state.name}</li>
        </ul>
        <div className="container m-5"> 
          <Route path="/app/dashboard"  component={Dashboard} />
          <Route path="/app/createchart"  component={CreateChart} />
          <Route path="/app/make-your-chart" component={ChartData} />
          <Route path="/app/uploadCsv" component={CSVFileUploader} />
          <Route path="/app/profile" component={Profile} />
          <Route path="/app/logout" component= {Logout} /> 


        </div>
      </div>
    );
  }
}

export default ContentArea;
