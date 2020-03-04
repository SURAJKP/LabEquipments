import * as types from './actionConstants';
import api from '../../API/api';

export const listDevices = (devices) => ({
    type: types.GET_DEVICES,
    payload: devices
})

export const deviceList = () => dispatch =>
    api.devices.deviceList().then(res => dispatch(listDevices(res.data))
)