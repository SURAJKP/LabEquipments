/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ShowEquipmentDetails from './ShowEquipmentDetails'
import { currentEquipment } from '../../Redux/Actions/DeviceList';

class DeviceDetails extends React.Component {
    
    currentEquipment = (e) => {
        this.props.currentEquipment({ equipment: e.target.id })
    }

    equipmentList(){
        return this.props.equipments.map(item =>
            <tr key={item.id}>
                <td><Link id={item.equipmentName} onClick={this.currentEquipment}>{item.equipmentName}</Link></td>
            </tr>
        )
    }

    render(){
        return (
            <div className="row">
                <nav className="breadcrumb shadow p-3 mb-5">
                    <span className="breadcrumb-item"><i className="fa fa-list-alt"></i></span>
                    <span className="breadcrumb-item"><b>Device Name</b></span>
                    <span className="breadcrumb-item active">{this.props.equipment.equipment}</span>
                </nav>
                <div className="col-lg-8">
                    <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
                        <ShowEquipmentDetails equipment={this.props.equipment} equipments={this.props.equipments} />
                    </div>
                </div>
                <div className="col-lg-4">
                    <table>
                        <tr>
                            <th>Device Name</th>
                        </tr>
                        {this.equipmentList()}
                    </table>
                </div>
            </div>
        );
    }
}
  
export default connect(null, {currentEquipment})(DeviceDetails);