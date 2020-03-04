import axios from 'axios';

export default {
    devices: {
        deviceList: () =>
        axios.get("./jsonData.json").then(res => res)
    }
};