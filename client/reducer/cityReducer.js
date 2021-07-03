import {
    CITY_LIST_FAIL,
    CITY_LIST_REQUEST,
    CITY_LIST_SUCCESS,
    DISTRICT_LIST_FAIL,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,
    SQUARE_LIST_FAIL, 
    SQUARE_LIST_REQUEST, 
    SQUARE_LIST_SUCCESS,
} from "../constant/cityConst";

export const cityListReducer = (state = { loading: true, city: [] }, action) => {

    switch (action.type) {
        case CITY_LIST_REQUEST:
            return { loading: true }
        case CITY_LIST_SUCCESS:
            return { loading: false, city: action.payload }
        case CITY_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}



export const distListReducer = (state = { loading: true, dist: [] }, action) => {

    switch (action.type) {
        case DISTRICT_LIST_REQUEST:
            return { loading: true }
        case DISTRICT_LIST_SUCCESS:
            return { loading: false, dist: action.payload }
        case DISTRICT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}



export const squareListReducer = (state = { loading: true, square: [] }, action) => {

    switch (action.type) {
        case SQUARE_LIST_REQUEST:
            return { loading: true }
        case SQUARE_LIST_SUCCESS:
            return { loading: false, square: action.payload }
        case SQUARE_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}


