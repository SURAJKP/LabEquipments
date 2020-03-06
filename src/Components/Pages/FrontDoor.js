import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { deviceList } from '../../Redux/Actions/DeviceList'
import DeviceDetails from './DeviceDetails'
import Loader from '../Common/Loader'

const FrontDoor = props => {

    const [ loader, changeloader ] = useState(true);

    useEffect(() => {
        props.deviceList().then(() => {
           changeloader(false)
        }).catch((err) => {
            console.log(err)
            changeloader(true)
        });
    })

        return (
            <Fragment>
            {props.devices.devices === undefined && props.devices.devices.length === 0 && loader ?  
                <Loader /> 
                    :
                <DeviceDetails equipments={props.devices.devices} />
            }
            </Fragment>
        )
    }

const mapStateToProps = state => {
    return {
        devices: state.devices
    }
}

export default connect(mapStateToProps, { deviceList })(FrontDoor);