import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { deviceList } from '../../Redux/Actions/DeviceList'
import DeviceDetails from './DeviceDetails'
import Loader from '../Common/Loader'

class FrontDoor extends React.Component {

    state = {
        loader: true
    }

    componentDidMount() {
        this.props.deviceList().then(() => {
            this.setState({
                loader: false
            })
         }).catch((err) => {
            console.log(err)
            this.setState({
                loader: false
            })
         });
    }
        render(){
            return (
                <Fragment>
                {this.props.devices.devices === undefined && this.props.devices.devices.length === 0 && this.state.loader ?  
                    <Loader /> 
                        :
                    <DeviceDetails equipments={this.props.devices.devices} equipment={this.props.equipment} />
                }
                </Fragment>
            )
        }
    }

const mapStateToProps = state => {
    return {
        devices: state.devices,
        equipment: state.devices.equipment
    }
}

export default connect(mapStateToProps, { deviceList })(FrontDoor);