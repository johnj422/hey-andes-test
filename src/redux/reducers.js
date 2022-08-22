import { GET_ALL_AGENCYS, GET_AGENCYS_NAMES, GET_TOTAL_SALES } from './actions'

const initialState = {
    allAgencys: [],
    agencyNameArr: [],
    totalSales: [],

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_AGENCYS:
            return {
                ...state,
                allAgencys: action.payload
            }
        case GET_AGENCYS_NAMES:
            return {
                ...state,
                agencyNamesArr: action.payload
            }
        case GET_TOTAL_SALES:
            return {
                ...state,
                totalSales: action.payload
            }
        default:
            return state;
    }
}