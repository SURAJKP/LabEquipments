import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import FrontDoor from './Pages/FrontDoor'
import mockTemplate from './Pages/mockTemplate'
import AutoComplete from './AutoComplete'

class App extends React.Component {
  render(){
    return (
      <Fragment>
      <ul className="topnav">
        <li>
            <Link className="brand" to="/">
              <img className="brand" src="https://images.squarespace-cdn.com/content/v1/59d2f4d5268b96fce029e855/1551461105741-AXMX8V96ZUWER2VPNT0Z/ke17ZwdGBToddI8pDm48kJGcRY_9UaAkltAIWsyGy-JZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVERzrqKjMhi8sBDSXrYG_eWbfmN7azObupjyEquOzFa6u87Nsj43NRAr6WuWZv5DKs/LAB+LOGO.png" alt="lab logo" />
            </Link>
        </li>
        <li className="mockTemplate"><Link to="/mockTemplate">Mock_Template</Link></li>

        <div className="search-container">
            <form>
              {this.props.devices.devices === undefined && this.props.devices.devices.length === 0 ?  
                null : <AutoComplete options={this.props.devices}/>
              }
            </form>
        </div>
      </ul>
      
        <Switch>
            <Route path="/" exact component={FrontDoor} />
            <Route path="/mockTemplate" exact component={mockTemplate} />
        </Switch>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
      devices: state.devices
  }
}

export default connect(mapStateToProps, null)(App);