/* eslint-disable array-callback-return */
import React from 'react';

const ShowEquipmentDetails = props => {
    return props.equipments.map( item => {
        if (props.equipment.equipment === item.equipmentName) {
            return <div key={item.id} className="raw">
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

export default ShowEquipmentDetails;
