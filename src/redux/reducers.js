import { GET_ALL_AGENCYS } from './actions'

const initialState = {
    allAgencys: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_AGENCYS:
            return {
                ...state,
                allAgencys: action.payload
            }
        default:
            return state;
    }
}