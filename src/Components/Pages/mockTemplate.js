/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { Component, Fragment } from 'react'

export default class mockTemplate extends Component {
    render() {
        return (
            <Fragment>
            <div className="flex-container">
                <div><a href="/">Create a template name</a></div>
                <div className="dropdown"><a href="/" className="dropbtn">Draft <i className="fa fa-angle-down"></i></a>
                    <div className="dropdown-content">
                        <a href="/">Data A</a>
                        <a href="/">Data B</a>
                        <a href="/">Data C</a>
                    </div>
                </div>
                <div className="dropdown"><a href="/" className="dropbtn">BGDBRCO2 <i className="fa fa-angle-down"></i></a>
                    <div className="dropdown-content">
                        <a href="/">Data A</a>
                        <a href="/">Data B</a>
                        <a href="/">Data C</a>
                    </div>
                </div>
                <div className="custom-control custom-checkbox" style={{backgroundColor: "rgb(220,220,220)"}}>
                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                        <label className="custom-control-label" htmlFor="customCheck">Set as default</label>
                </div>
                <div className="child" style={{backgroundColor: "rgb(220,220,220)" }}>Signature needed <span>1</span></div>
            </div>
            <div className="flex-container2">
                    <p>Report Includes</p>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Run Header</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                        <label className="custom-control-label" htmlFor="customCheck2">Audit Trail</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck3" />
                        <label className="custom-control-label" htmlFor="customCheck3">Run Summary</label>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck4" />
                        <label className="custom-control-label" htmlFor="customCheck4">Alarms</label>
                        <i className="fa fa-eye" style={{ float: "right"}}></i>
                    </div>
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck5" />
                        <label className="custom-control-label" htmlFor="customCheck5">Trends</label>
                        <i className="fa fa-eye" style={{ float: "right"}}></i>
                    </div>
            </div>
            
            <div className="btn-block pull-right">
                <div><a href="/" className="btn btn-primary pull-right mr-1">Save</a></div>
                <div><a href="/" style={{pointerEvents:"none", opacity: 0.4 }} className="btn btn-primary pull-right mr-3" disabled>Save As</a></div>
                <div><a href="/" className="btn btn-cancel pull-right mr-3">Cancel</a></div>
            </div>
        </Fragment>

        )
    }
}
