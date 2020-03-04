/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from 'react-router-dom'

class DeviceDetails extends React.Component {
    state = {
        equipment: ""
    }

    currentEquipment = (e) => {
        this.setState({equipment: e.target.id})
    }

    equipmentList(){
        return this.props.equipments.map(item =>
            <tr key={item.id}>
                <td><Link id={item.equipmentName} onClick={this.currentEquipment}>{item.equipmentName}</Link></td>
            </tr>
        )
    }

    showEquipmentDetails(){
        return this.props.equipments.map( (item) => {
            if (this.state.equipment === item.equipmentName) {
                return <div className="raw">
                    <div className="col-sm-4">
                        <img className="image" src={item.imageUrl} alt="img" />
                    </div>
                    <div className="col-sm-8">
                        <div>
                            <label className="details" htmlFor="equipmentName">Equipment Name</label>
                            <p className="details">{item.equipmentName}</p>
                        </div>
                        <div>
                            <label className="details" htmlFor="vendor">Vendor</label>
                            <p className="details">{item.vendor}</p>
                        </div>
                        <div>
                            <label className="details" htmlFor="location">Location</label>
                            <p className="details">{item.location}</p>
                        </div>
                        <div>
                            <label className="details" htmlFor="model">Model</label>
                            <p className="details">{item.model}</p>
                        </div>
                        <div>
                            <label className="details" htmlFor="serial">#Serial</label>
                            <p className="details">{item.serial}</p>
                        </div>
                        <div>
                            <label className="details" htmlFor="description">Description</label>
                            <p className="details">{item.description}</p>
                        </div>
                    </div>
                </div>
            }
        });
    }

    render(){
        return (
            <div className="row">
                <nav className="breadcrumb shadow p-3 mb-5">
                    <span className="breadcrumb-item"><i className="fas fa-list-alt"></i></span>
                    <span className="breadcrumb-item"><b>Device Name</b></span>
                    <span className="breadcrumb-item active">{this.state.equipment}</span>
                </nav>
                <div className="col-lg-8">
                    <div className="container-fluid shadow p-3 mb-5 bg-white rounded">
                        {this.showEquipmentDetails()}
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
export default DeviceDetails;