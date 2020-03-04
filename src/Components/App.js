import React, { Fragment } from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import FrontDoor from './Pages/FrontDoor';

class App extends React.Component {
  render(){
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            <img className="brand" src="https://images.squarespace-cdn.com/content/v1/59d2f4d5268b96fce029e855/1551461105741-AXMX8V96ZUWER2VPNT0Z/ke17ZwdGBToddI8pDm48kJGcRY_9UaAkltAIWsyGy-JZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVERzrqKjMhi8sBDSXrYG_eWbfmN7azObupjyEquOzFa6u87Nsj43NRAr6WuWZv5DKs/LAB+LOGO.png" alt="lab logo" />
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            </form>
        </div>
        </nav>
      
        <Switch>
            <Route path="/" exact component={FrontDoor} />
        </Switch>
      </Fragment>
    )
  }
}

export default App;