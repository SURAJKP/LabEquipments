import { GET_DEVICES } from "../Actions/actionConstants";

// Initial state
export const initialState = {
    devices: []
};

export default function Devices(state = initialState, action){
    switch(action.type){
        case GET_DEVICES:
            return { ...state, devices: action.payload };

        default: return state;
    }
};