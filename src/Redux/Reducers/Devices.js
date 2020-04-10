import { GET_DEVICES, UPDATE_CURRENT_EQUIPMENT } from "../Actions/actionConstants";

// Initial state
export const initialState = {
    devices: [],
    equipment: ""

};

export default function devices(state = initialState, action){
    switch(action.type){
        case GET_DEVICES:
            return { ...state, devices: action.payload };

        case UPDATE_CURRENT_EQUIPMENT:
            return { ...state, equipment: action.payload };    

        default: return state;
    }
};
