import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { deviceList } from '../../Redux/Actions/DeviceList'
import DeviceDetails from './DeviceDetails'
import Loader from '../Common/Loader'

class FrontDoor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: true
        }
    }

    componentDidMount() {
        this.props.deviceList().then(() => {
            this.setState({loader: false})
        }).catch((err) => {
            console.log(err)
            this.setState({loader: false})
        });
    }

    render(){
        var totalDeviceList = this.props.devices;
        return (
            <Fragment>
            {totalDeviceList.devices !== undefined && totalDeviceList.devices.length > 0 ?
                <DeviceDetails equipments={totalDeviceList.devices} />
                :
                <Loader /> 
            }
            </Fragment>
        )
    }        
}

const mapStateToProps = state => {
    return {
        devices: state.devices
    }
}

export default connect(mapStateToProps, { deviceList })(FrontDoor);