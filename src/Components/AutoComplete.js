/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { currentEquipment }  from '../Redux/Actions/DeviceList';


class AutoComplete extends Component {

    state = {
        equipment: "",
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: ''
    };

    onChange = e => {
        const userInput = e.target.value;
        console.log(this.props.options);
        const filteredOptions = this.props.options.devices.filter(
            optionName =>
              optionName.equipmentName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
          );

          this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
          });
    }

    currentEquipment = (e) => {
        this.props.currentEquipment({ equipment: e.target.id });
    }

    render() {
        const {
            state: { activeOption, filteredOptions, showOptions, userInput }
          } = this;
        let optionList;
        if (showOptions && userInput) {
        if (filteredOptions.length) {
            optionList = (
            <ul className="options">
                {filteredOptions.map((item, index) => {
                let className;
                if (index === activeOption) {
                    className = 'option-active';
                }
                return (
                    <i key={item.equipmentName}>
                        <Link id={item.equipmentName} onClick={this.currentEquipment}>{item.equipmentName}</Link>
                    </i>
                );
                })}
            </ul>
            );
        } else {
            optionList = (
                <ul className="options">
                    <i>
                        No Option!
                    </i>
                </ul>
            );
        }
    }
        return (
            <Fragment>
                <input 
                    className="form-control" 
                    type="text" 
                    placeholder="Search" 
                    onChange={this.onChange}
                    value={userInput}
                    /> 
                    {optionList}
            </Fragment>
        );
    }
}

export default connect( null, { currentEquipment })(AutoComplete);