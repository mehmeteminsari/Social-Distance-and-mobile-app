import Axios from "axios";
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




export const getCity = () => async (dispatch) => {
    dispatch({
        type: CITY_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get('http://192.168.1.2:5000/city');
        dispatch({
            type: CITY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CITY_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getDist = (cityId) => async (dispatch) => {
    dispatch({
        type: DISTRICT_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get(`http://192.168.1.2:5000/city/${cityId}`);

        dispatch({
            type: DISTRICT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: DISTRICT_LIST_FAIL,
            payload: error.message
        })
    }
}

export const getSquare = (distId) => async (dispatch) => {
    dispatch({
        type: SQUARE_LIST_REQUEST
    })
    try {
        const { data } = await Axios.get(`http://192.168.1.2:5000/city/square/${distId}`);

        dispatch({
            type: SQUARE_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: SQUARE_LIST_FAIL,
            payload: error.message
        })
    }
}

