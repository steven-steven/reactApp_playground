import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home/index';
import Project from './components/Project/index';
import NotFound from './components/NotFound/index';

import userIcon from './components/Home/task.png';

class App extends Component {
  //CALL BACKEND API
  // state = {
  //   data: null
  // };

  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  renderAccountLink(username){
    if(username){
      return (
        <span>
          <span> 
            <img src={userIcon} alt="" className="circle" style={{width:30, verticalAlign:'middle'}}/>
          </span>
          <span className="hide-on-small-only">username</span>
        </span>
      )
    } else{
      return(<i className="account material-icons">person</i>);
    }
  }
  render() {
    return (
      <Router>
        <div className="App">

          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo center">Log It</a>
              <ul id="nav-mobile" class="left">
                <li><Link to={'/project'}><i class="material-icons">menu</i></Link></li>
              </ul>
              <ul id="nav-mobile" class="right">
                <li><Link to={'/project'}>{this.renderAccountLink("Steven")}</Link></li>
                <li><div class="verticalDivider"></div><Link to={'/project'}><i class="account material-icons">arrow_drop_down</i></Link></li>
              </ul>
            </div>
          </nav>
        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/project/:project_id" component={Project}/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
